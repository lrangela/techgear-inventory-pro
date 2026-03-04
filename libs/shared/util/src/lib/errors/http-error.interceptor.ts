import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AppErrorState } from './app-error';

export const httpErrorInterceptor: HttpInterceptorFn = (request, next) => {
  const appErrorState = inject(AppErrorState);

  return next(request).pipe(
    catchError((error: unknown) => {
      const appError = appErrorState.report(error);
      return throwError(() => appError);
    })
  );
};
