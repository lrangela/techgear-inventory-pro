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
  AuthStore,
  authInterceptor,
  LOGIN_PAGE_CONFIG,
  provideTokenStorage,
} from '@techgear/data-access/auth';
import { InventoryStore } from '@techgear/data-access/inventory';
import { PRODUCTS_API_BASE_URL } from '@techgear/data-access/products';
import { CATEGORIES_API_BASE_URL } from '@techgear/data-access/categories';
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
        appTitle: 'TechGear Admin Panel',
        subtitle: 'Sign in to review the inventory dashboard and product management flows.',
        defaultRedirectUrl: '/products',
        demoAccount: {
          email: 'emily.johnson@x.dummyjson.com',
          username: 'emilys',
          password: 'emilyspass',
        },
      },
    },
    provideAppInitializer(() => {
      const authStore = inject(AuthStore);
      const inventoryStore = inject(InventoryStore);
      authStore.initFromStorage();
      inventoryStore.loadFromStorage();
    }),
    provideRouter(appRoutes),
  ],
};
