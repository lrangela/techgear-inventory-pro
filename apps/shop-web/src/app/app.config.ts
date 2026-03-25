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
import { httpErrorInterceptor, AppConfigService } from '@techgear/util';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withInterceptors([httpErrorInterceptor, authInterceptor])),
    provideTokenStorage(),
    {
      provide: AUTH_API_BASE_URL,
      useFactory: () => inject(AppConfigService).apiBaseUrl,
    },
    {
      provide: PRODUCTS_API_BASE_URL,
      useFactory: () => inject(AppConfigService).apiBaseUrl,
    },
    {
      provide: CATEGORIES_API_BASE_URL,
      useFactory: () => inject(AppConfigService).apiBaseUrl,
    },
    {
      provide: LOGIN_PAGE_CONFIG,
      useFactory: () => {
        const config = inject(AppConfigService);
        return {
          appTitle: 'TechGear Inventory Pro',
          subtitle: 'Sign in to explore the storefront, product detail flow, and cart experience.',
          defaultRedirectUrl: '/catalog',
          accountHint:
            config.authMode === 'mock'
              ? {
                  email: 'shop.demo@techgear.dev',
                  username: 'shop-demo',
                  password: 'ShopDemo123!',
                  role: 'customer',
                  source: 'mock',
                }
              : null,
          remoteAccountPath: config.authMode === 'remote' ? '/users/6' : null,
        };
      },
    },
    {
      provide: AUTH_RUNTIME_CONFIG,
      useFactory: () => {
        const config = inject(AppConfigService);
        return {
          mode: config.authMode,
          defaultRemoteRole: 'customer',
          roleOverrides: {
            'shop-demo': 'customer',
            'shop.demo@techgear.dev': 'customer',
            oliviaw: 'customer',
            'olivia.wilson@x.dummyjson.com': 'customer',
            'admin-demo': 'admin',
            'admin.demo@techgear.dev': 'admin',
          },
          mockAccounts: [
            {
              id: 1001,
              email: 'shop.demo@techgear.dev',
              username: 'shop-demo',
              password: 'ShopDemo123!',
              name: 'Shop Demo User',
              role: 'customer',
            },
          ],
        };
      },
    },
    provideAppInitializer(() => {
      const configService = inject(AppConfigService);
      const authStore = inject(AuthStore);
      const inventoryStore = inject(InventoryStore);
      const cartStore = inject(CartStore);

      return configService.loadConfig().then(() => {
        authStore.initFromStorage();
        inventoryStore.loadFromStorage();
        cartStore.loadFromStorage();
      });
    }),
    provideRouter(appRoutes),
  ],
};
