import { Route } from '@angular/router';
import { authGuard, roleGuard } from '@techgear/data-access/auth';
import { pendingChangesGuard } from '@techgear/util';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@techgear/features/auth').then(
        (module) => module.LoginPageComponent
      ),
  },
  {
    path: 'forbidden',
    loadComponent: () =>
      import('./forbidden-page').then((module) => module.ForbiddenPageComponent),
  },
  {
    path: 'products',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'], unauthorizedRedirectTo: '/forbidden' },
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductsListComponent
      ),
  },
  {
    path: 'products/new',
    canActivate: [authGuard, roleGuard],
    canDeactivate: [pendingChangesGuard],
    data: { roles: ['admin'], unauthorizedRedirectTo: '/forbidden' },
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductEditComponent
      ),
  },
  {
    path: 'products/:id',
    canActivate: [authGuard, roleGuard],
    canDeactivate: [pendingChangesGuard],
    data: { roles: ['admin'], unauthorizedRedirectTo: '/forbidden' },
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductEditComponent
      ),
  },
  {
    path: 'inventory',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'], unauthorizedRedirectTo: '/forbidden' },
    loadComponent: () =>
      import('@techgear/features-admin-inventory').then(
        (module) => module.InventoryDashboardComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
