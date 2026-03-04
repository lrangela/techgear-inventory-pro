import { Route } from '@angular/router';
import { authGuard } from '@techgear/data-access/auth';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('@techgear/features/auth').then(
        (module) => module.LoginPageComponent
      ),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@techgear/catalog').then((module) => module.ShopShellPageComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'catalog',
      },
      {
        path: 'catalog',
        loadComponent: () =>
          import('@techgear/catalog').then(
            (module) => module.CatalogPageComponent
          ),
      },
      {
        path: 'products',
        pathMatch: 'full',
        redirectTo: 'catalog',
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import('@techgear/product-detail').then(
            (module) => module.ProductDetailPageComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('@techgear/features-cart').then(
            (module) => module.CartPageComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'catalog',
  },
];
