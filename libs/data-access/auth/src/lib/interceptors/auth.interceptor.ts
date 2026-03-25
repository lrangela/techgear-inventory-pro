import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { from, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthStore } from '../state/auth.store';

const isAuthEndpoint = (request: HttpRequest<unknown>) => {
  return (
    request.url.includes('/auth/login') ||
    request.url.includes('/auth/refresh')
  );
};

// Variable persistente entre llamadas al interceptor funcional
let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const authStore = inject(AuthStore);
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

      if (!isRefreshing) {
        isRefreshing = true;
        refreshTokenSubject.next(null);

        return from(authStore.refresh()).pipe(
          switchMap((newToken) => {
            isRefreshing = false;
            if (!newToken) {
              return throwError(() => error);
            }
            refreshTokenSubject.next(newToken);
            return next(addToken(request, newToken));
          }),
          catchError((refreshError) => {
            isRefreshing = false;
            return throwError(() => refreshError);
          })
        );
      } else {
        // Semaforización: esperar a que el primer refresco termine
        return refreshTokenSubject.pipe(
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
