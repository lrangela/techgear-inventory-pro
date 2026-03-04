import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AUTH_RUNTIME_CONFIG } from '../auth-runtime.config';
import { AuthTokensDtoSchema, AuthUserDtoSchema } from '../contracts/auth.contracts';
import {
  AuthTokens,
  AuthUser,
  LoginRequest,
  MockAuthAccount,
  mapAuthTokens,
  mapAuthUser,
} from '../models/auth.models';
import { parseWithZod } from '../validation/parse-with-zod';

export const AUTH_API_BASE_URL = new InjectionToken<string>('AUTH_API_BASE_URL');
const MOCK_USER_KEY = 'tg_mock_user';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(AUTH_API_BASE_URL);
  private readonly runtimeConfig = inject(AUTH_RUNTIME_CONFIG);

  login(payload: LoginRequest) {
    if (this.runtimeConfig.mode === 'mock') {
      return this.mockLogin(payload);
    }

    return this.http
      .post<unknown>(`${this.baseUrl}/auth/login`, payload)
      .pipe(
        map((response) => {
          const dto = parseWithZod(AuthTokensDtoSchema, response, 'auth.login');
          return mapAuthTokens(dto);
        })
      );
  }

  profile() {
    if (this.runtimeConfig.mode === 'mock') {
      return this.mockProfile();
    }

    return this.http.get<unknown>(`${this.baseUrl}/auth/me`).pipe(
      map((response) => {
        const dto = parseWithZod(AuthUserDtoSchema, response, 'auth.profile');
        return mapAuthUser(dto);
      })
    );
  }

  refresh(refreshToken: string) {
    if (this.runtimeConfig.mode === 'mock') {
      return this.mockRefresh(refreshToken);
    }

    return this.http
      .post<unknown>(`${this.baseUrl}/auth/refresh`, { refreshToken })
      .pipe(
        map((response) => {
          const dto = parseWithZod(AuthTokensDtoSchema, response, 'auth.refresh');
          return mapAuthTokens(dto);
        })
      );
  }

  clearSession(): void {
    localStorage.removeItem(MOCK_USER_KEY);
  }

  private mockLogin(payload: LoginRequest): Observable<AuthTokens> {
    const account = this.runtimeConfig.mockAccounts.find(
      (item) =>
        item.username.toLowerCase() === payload.username.toLowerCase() &&
        item.password === payload.password
    );

    if (!account) {
      return throwError(() => new Error('Invalid demo credentials'));
    }

    localStorage.setItem(MOCK_USER_KEY, JSON.stringify(account));

    return of(this.tokensFor(account));
  }

  private mockProfile(): Observable<AuthUser> {
    const raw = localStorage.getItem(MOCK_USER_KEY);
    if (!raw) {
      return throwError(() => new Error('Mock session not found'));
    }

    const account = JSON.parse(raw) as MockAuthAccount;

    return of({
      id: account.id,
      email: account.email,
      name: account.name,
      role: account.role,
      avatar: account.avatar ?? null,
    });
  }

  private mockRefresh(refreshToken: string): Observable<AuthTokens> {
    const raw = localStorage.getItem(MOCK_USER_KEY);
    if (!raw) {
      return throwError(() => new Error('Mock session not found'));
    }

    const account = JSON.parse(raw) as MockAuthAccount;
    const expectedRefreshToken = `mock-refresh-${account.username}`;
    if (refreshToken !== expectedRefreshToken) {
      return throwError(() => new Error('Invalid refresh token'));
    }

    return of(this.tokensFor(account));
  }

  private tokensFor(account: MockAuthAccount): AuthTokens {
    return {
      accessToken: `mock-access-${account.username}`,
      refreshToken: `mock-refresh-${account.username}`,
    };
  }
}
