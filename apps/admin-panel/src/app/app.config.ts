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
import { InventoryStore } from '@techgear/data-access/inventory';
import { PRODUCTS_API_BASE_URL } from '@techgear/data-access/products';
import { CATEGORIES_API_BASE_URL } from '@techgear/data-access/categories';
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
          appTitle: 'TechGear Admin Panel',
          subtitle:
            'Sign in to review the inventory dashboard and product management flows. Admin access is restricted by role.',
          defaultRedirectUrl: '/products',
          accountHint:
            config.authMode === 'mock'
              ? {
                  email: 'admin.demo@techgear.dev',
                  username: 'admin-demo',
                  password: 'AdminDemo123!',
                  role: 'admin',
                  source: 'mock',
                }
              : null,
          remoteAccountPath: config.authMode === 'remote' ? '/users/1' : null,
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
            'admin-demo': 'admin',
            'admin.demo@techgear.dev': 'admin',
          },
          mockAccounts: [
            {
              id: 9001,
              email: 'admin.demo@techgear.dev',
              username: 'admin-demo',
              password: 'AdminDemo123!',
              name: 'Admin Demo User',
              role: 'admin',
            },
          ],
        };
      },
    },
    provideAppInitializer(() => {
      const configService = inject(AppConfigService);
      const authStore = inject(AuthStore);
      const inventoryStore = inject(InventoryStore);

      return configService.loadConfig().then(() => {
        authStore.initFromStorage();
        inventoryStore.loadFromStorage();
      });
    }),
    provideRouter(appRoutes),
  ],
};
