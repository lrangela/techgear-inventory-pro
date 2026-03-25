import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { getBrowserStorage, readJsonFromStorage, writeJsonToStorage } from '@techgear/util';
import { AUTH_RUNTIME_CONFIG } from '../auth-runtime.config';
import {
  AuthLoginHintDtoSchema,
  AuthTokensDtoSchema,
  AuthUserDtoSchema,
} from '../contracts/auth.contracts';
import {
  LoginAccountHint,
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
  private readonly sessionStorageRef = getBrowserStorage('session');

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
        return this.applyRolePolicy(mapAuthUser(dto));
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

  sampleAccount(path: string): Observable<LoginAccountHint> {
    return this.http.get<unknown>(`${this.baseUrl}${path}`).pipe(
      map((response) => {
        const dto = parseWithZod(AuthLoginHintDtoSchema, response, 'auth.sample-account');
        return {
          email: dto.email,
          username: dto.username,
          password: dto.password,
          role: dto.role ?? null,
          source: 'remote',
        } satisfies LoginAccountHint;
      })
    );
  }

  clearSession(): void {
    this.sessionStorageRef?.removeItem(MOCK_USER_KEY);
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

    writeJsonToStorage(this.sessionStorageRef, MOCK_USER_KEY, account);

    return of(this.tokensFor(account));
  }

  private mockProfile(): Observable<AuthUser> {
    const account = readJsonFromStorage<MockAuthAccount | null>(
      this.sessionStorageRef,
      MOCK_USER_KEY,
      null
    );
    if (!account) {
      return throwError(() => new Error('Mock session not found'));
    }

    return of({
      id: account.id,
      username: account.username,
      email: account.email,
      name: account.name,
      role: account.role,
      avatar: account.avatar ?? null,
    });
  }

  private mockRefresh(refreshToken: string): Observable<AuthTokens> {
    const account = readJsonFromStorage<MockAuthAccount | null>(
      this.sessionStorageRef,
      MOCK_USER_KEY,
      null
    );
    if (!account) {
      return throwError(() => new Error('Mock session not found'));
    }
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

  private applyRolePolicy(user: AuthUser): AuthUser {
    const override =
      this.runtimeConfig.roleOverrides?.[user.username] ??
      (user.email ? this.runtimeConfig.roleOverrides?.[user.email] : undefined);

    return {
      ...user,
      role: override ?? user.role ?? this.runtimeConfig.defaultRemoteRole ?? null,
    };
  }
}
