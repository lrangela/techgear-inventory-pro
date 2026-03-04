import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthStore } from '../state/auth.store';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authStore = inject(AuthStore);
  const router = inject(Router);
  const roles = (route.data?.['roles'] as string[] | undefined) ?? [];

  if (!authStore.isAuthenticated()) {
    return router.parseUrl('/login');
  }

  if (roles.length === 0) {
    return true;
  }

  const user = authStore.user();
  if (!user?.role) {
    return router.parseUrl('/login');
  }

  return roles.includes(user.role);
};
