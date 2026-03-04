import { HttpClient } from '@angular/common/http';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthTokensDtoSchema, AuthUserDtoSchema } from '../contracts/auth.contracts';
import { LoginRequest, mapAuthTokens, mapAuthUser } from '../models/auth.models';
import { parseWithZod } from '../validation/parse-with-zod';

export const AUTH_API_BASE_URL = new InjectionToken<string>('AUTH_API_BASE_URL');

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(AUTH_API_BASE_URL);

  login(payload: LoginRequest) {
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
    return this.http.get<unknown>(`${this.baseUrl}/auth/me`).pipe(
      map((response) => {
        const dto = parseWithZod(AuthUserDtoSchema, response, 'auth.profile');
        return mapAuthUser(dto);
      })
    );
  }

  refresh(refreshToken: string) {
    return this.http
      .post<unknown>(`${this.baseUrl}/auth/refresh`, { refreshToken })
      .pipe(
        map((response) => {
          const dto = parseWithZod(AuthTokensDtoSchema, response, 'auth.refresh');
          return mapAuthTokens(dto);
        })
      );
  }
}
