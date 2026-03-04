import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { AuthStore, LOGIN_PAGE_CONFIG } from '@techgear/data-access/auth';
import { LoginPageComponent } from './login-page';

describe('LoginPageComponent logic', () => {
  it('navigates to the configured default url after login', async () => {
    const login = vi.fn().mockResolvedValue(undefined);
    const navigateByUrl = vi.fn().mockResolvedValue(true);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthStore, useValue: { login, status: () => 'idle' } },
        { provide: Router, useValue: { navigateByUrl } },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({}),
            },
          },
        },
        {
          provide: LOGIN_PAGE_CONFIG,
          useValue: {
            appTitle: 'TechGear',
            subtitle: 'Sign in',
            defaultRedirectUrl: '/catalog',
            demoAccount: null,
          },
        },
      ],
    });

    const component = TestBed.runInInjectionContext(() => new LoginPageComponent());

    await component.onSubmit({ username: 'emilys', password: 'emilyspass' });

    expect(login).toHaveBeenCalledWith('emilys', 'emilyspass');
    expect(navigateByUrl).toHaveBeenCalledWith('/catalog');
  });

  it('prefers a safe returnUrl from the query string', async () => {
    const login = vi.fn().mockResolvedValue(undefined);
    const navigateByUrl = vi.fn().mockResolvedValue(true);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthStore, useValue: { login, status: () => 'idle' } },
        { provide: Router, useValue: { navigateByUrl } },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              queryParamMap: convertToParamMap({ returnUrl: '/inventory' }),
            },
          },
        },
        {
          provide: LOGIN_PAGE_CONFIG,
          useValue: {
            appTitle: 'TechGear',
            subtitle: 'Sign in',
            defaultRedirectUrl: '/catalog',
            demoAccount: null,
          },
        },
      ],
    });

    const component = TestBed.runInInjectionContext(() => new LoginPageComponent());

    await component.onSubmit({ username: 'emilys', password: 'emilyspass' });

    expect(navigateByUrl).toHaveBeenCalledWith('/inventory');
  });
});
