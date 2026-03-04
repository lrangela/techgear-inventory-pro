import { Route } from '@angular/router';
import { authGuard } from '@techgear/data-access/auth';

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
    path: 'products',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductsListComponent
      ),
  },
  {
    path: 'products/new',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductEditComponent
      ),
  },
  {
    path: 'products/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/features-admin-products').then(
        (module) => module.ProductEditComponent
      ),
  },
  {
    path: 'inventory',
    canActivate: [authGuard],
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
