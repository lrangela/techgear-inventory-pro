import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  inject,
} from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  AUTH_API_BASE_URL,
  AUTH_RUNTIME_CONFIG,
  AuthStore,
  authInterceptor,
  LOGIN_PAGE_CONFIG,
  provideTokenStorage,
} from '@techgear/data-access/auth';
import { PRODUCTS_API_BASE_URL } from '@techgear/data-access/products';
import { CATEGORIES_API_BASE_URL } from '@techgear/data-access/categories';
import { InventoryStore } from '@techgear/data-access/inventory';
import { CartStore } from '@techgear/data-access-cart';
import { httpErrorInterceptor } from '@techgear/util';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptors([httpErrorInterceptor, authInterceptor])),
    provideTokenStorage(),
    {
      provide: AUTH_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: PRODUCTS_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: CATEGORIES_API_BASE_URL,
      useValue: environment.apiBaseUrl,
    },
    {
      provide: LOGIN_PAGE_CONFIG,
      useValue: {
        appTitle: 'TechGear Inventory Pro',
        subtitle: 'Sign in to explore the storefront, product detail flow, and cart experience.',
        defaultRedirectUrl: '/catalog',
        demoAccount: {
          email: 'shop.demo@techgear.dev',
          username: 'shop-demo',
          password: 'ShopDemo123!',
        },
      },
    },
    {
      provide: AUTH_RUNTIME_CONFIG,
      useValue: {
        mode: environment.authMode,
        mockAccounts: [
          {
            id: 1001,
            email: 'shop.demo@techgear.dev',
            username: 'shop-demo',
            password: 'ShopDemo123!',
            name: 'Shop Demo User',
            role: 'customer',
          },
          {
            id: 9001,
            email: 'admin.demo@techgear.dev',
            username: 'admin-demo',
            password: 'AdminDemo123!',
            name: 'Admin Demo User',
            role: 'admin',
          },
        ],
      },
    },
    provideAppInitializer(() => {
      const authStore = inject(AuthStore);
      const inventoryStore = inject(InventoryStore);
      const cartStore = inject(CartStore);
      authStore.initFromStorage();
      inventoryStore.loadFromStorage();
      cartStore.loadFromStorage();
    }),
    provideRouter(appRoutes),
  ],
};
