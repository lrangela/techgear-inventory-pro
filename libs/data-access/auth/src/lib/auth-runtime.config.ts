import { InjectionToken } from '@angular/core';
import { AuthMode, MockAuthAccount } from './models/auth.models';

export type AuthRuntimeConfig = {
  mode: AuthMode;
  mockAccounts: MockAuthAccount[];
};

const DEFAULT_AUTH_RUNTIME_CONFIG: AuthRuntimeConfig = {
  mode: 'remote',
  mockAccounts: [],
};

export const AUTH_RUNTIME_CONFIG = new InjectionToken<AuthRuntimeConfig>(
  'AUTH_RUNTIME_CONFIG',
  {
    providedIn: 'root',
    factory: () => DEFAULT_AUTH_RUNTIME_CONFIG,
  }
);
