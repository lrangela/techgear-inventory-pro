import { InjectionToken } from '@angular/core';

export type DemoAccount = {
  email: string;
  username: string;
  password: string;
};

export type LoginPageConfig = {
  appTitle: string;
  subtitle: string;
  defaultRedirectUrl: string;
  demoAccount: DemoAccount | null;
};

const DEFAULT_LOGIN_PAGE_CONFIG: LoginPageConfig = {
  appTitle: 'TechGear Inventory Pro',
  subtitle: 'Sign in to continue.',
  defaultRedirectUrl: '/catalog',
  demoAccount: null,
};

export const LOGIN_PAGE_CONFIG = new InjectionToken<LoginPageConfig>(
  'LOGIN_PAGE_CONFIG',
  {
    providedIn: 'root',
    factory: () => DEFAULT_LOGIN_PAGE_CONFIG,
  }
);
