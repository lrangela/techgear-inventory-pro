import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { from, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthStore } from '../state/auth.store';

const isAuthEndpoint = (request: HttpRequest<unknown>) => {
  return (
    request.url.includes('/auth/login') ||
    request.url.includes('/auth/refresh')
  );
};

@Injectable({ providedIn: 'root' })
export class AuthRefreshGate {
  private isRefreshing = false;
  private readonly refreshTokenSubject = new BehaviorSubject<string | null>(null);

  getIsRefreshing(): boolean {
    return this.isRefreshing;
  }

  setIsRefreshing(value: boolean): void {
    this.isRefreshing = value;
  }

  getSubject(): BehaviorSubject<string | null> {
    return this.refreshTokenSubject;
  }
}

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const authStore = inject(AuthStore);
  const refreshGate = inject(AuthRefreshGate);
  const accessToken = authStore.accessToken();

  const addToken = (req: HttpRequest<unknown>, token: string) => {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const authRequest =
    accessToken && !isAuthEndpoint(request)
      ? addToken(request, accessToken)
      : request;

  return next(authRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401 || isAuthEndpoint(request)) {
        return throwError(() => error);
      }

      if (!refreshGate.getIsRefreshing()) {
        refreshGate.setIsRefreshing(true);
        refreshGate.getSubject().next(null);

        return from(authStore.refresh()).pipe(
          switchMap((newToken) => {
            refreshGate.setIsRefreshing(false);
            if (!newToken) {
              return throwError(() => error);
            }
            refreshGate.getSubject().next(newToken);
            return next(addToken(request, newToken));
          }),
          catchError((refreshError) => {
            refreshGate.setIsRefreshing(false);
            return throwError(() => refreshError);
          })
        );
      } else {
        // Semaforización: esperar a que el primer refresco termine
        return refreshGate.getSubject().pipe(
          filter((token) => token !== null),
          take(1),
          switchMap((token) => {
            return next(addToken(request, token!));
          })
        );
      }
    })
  );
};
