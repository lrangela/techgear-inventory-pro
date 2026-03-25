import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStore } from '../state/auth.store';

export const roleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state
) => {
  return (async () => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  const roles = (route.data?.['roles'] as string[] | undefined) ?? [];
  const unauthorizedRedirectTo =
    (route.data?.['unauthorizedRedirectTo'] as string | undefined) ?? null;

  if (!authStore.isAuthenticated()) {
    return router.parseUrl('/login');
  }

  if (roles.length === 0) {
    return true;
  }

  let user = authStore.user();
  if (!user) {
    try {
      user = await authStore.ensureProfileLoaded();
    } catch {
      return router.createUrlTree(['/login'], {
        queryParams: {
          returnUrl: state?.url ?? router.url,
        },
      });
    }
  }

  if (!user?.role) {
    if (unauthorizedRedirectTo) {
      return router.parseUrl(unauthorizedRedirectTo);
    }

    return router.createUrlTree(['/login'], {
      queryParams: {
        reason: 'role',
        returnUrl: state?.url ?? router.url,
      },
    });
  }

  if (roles.includes(user.role)) {
    return true;
  }

  if (unauthorizedRedirectTo) {
    return router.parseUrl(unauthorizedRedirectTo);
  }

  return router.createUrlTree(['/login'], {
    queryParams: {
      reason: 'role',
      returnUrl: state?.url ?? router.url,
    },
  });
  })();
};
