import { InjectionToken } from '@angular/core';
import { LoginAccountHint } from './models/auth.models';

export type LoginPageConfig = {
  appTitle: string;
  subtitle: string;
  defaultRedirectUrl: string;
  accountHint: LoginAccountHint | null;
  remoteAccountPath?: string | null;
};

const DEFAULT_LOGIN_PAGE_CONFIG: LoginPageConfig = {
  appTitle: 'TechGear Inventory Pro',
  subtitle: 'Sign in to continue.',
  defaultRedirectUrl: '/catalog',
  accountHint: null,
  remoteAccountPath: null,
};

export const LOGIN_PAGE_CONFIG = new InjectionToken<LoginPageConfig>(
  'LOGIN_PAGE_CONFIG',
  {
    providedIn: 'root',
    factory: () => DEFAULT_LOGIN_PAGE_CONFIG,
  }
);
