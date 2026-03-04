import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthStore } from '../state/auth.store';

const isAuthEndpoint = (request: HttpRequest<unknown>) => {
  return (
    request.url.includes('/auth/login') ||
    request.url.includes('/auth/refresh')
  );
};

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const authStore = inject(AuthStore);
  const accessToken = authStore.accessToken();

  const authRequest =
    accessToken && !isAuthEndpoint(request)
      ? request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      : request;

  return next(authRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status !== 401 || isAuthEndpoint(request)) {
        return throwError(() => error);
      }

      return from(authStore.refresh()).pipe(
        switchMap((newToken) => {
          if (!newToken) {
            return throwError(() => error);
          }

          const retryRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${newToken}`,
            },
          });

          return next(retryRequest);
        }),
        catchError((refreshError) => throwError(() => refreshError))
      );
    })
  );
};
