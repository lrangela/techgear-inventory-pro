import { TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { AuthApiService, AuthStore, LOGIN_PAGE_CONFIG } from '@techgear/data-access/auth';
import { of } from 'rxjs';
import { LoginPageComponent } from './login-page';

describe('LoginPageComponent logic', () => {
  it('navigates to the configured default url after login', async () => {
    const login = vi.fn().mockResolvedValue(undefined);
    const navigateByUrl = vi.fn().mockResolvedValue(true);

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthApiService, useValue: { sampleAccount: vi.fn().mockReturnValue(of(null)) } },
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
            accountHint: null,
            remoteAccountPath: null,
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
        { provide: AuthApiService, useValue: { sampleAccount: vi.fn().mockReturnValue(of(null)) } },
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
            accountHint: null,
            remoteAccountPath: null,
          },
        },
      ],
    });

    const component = TestBed.runInInjectionContext(() => new LoginPageComponent());

    await component.onSubmit({ username: 'emilys', password: 'emilyspass' });

    expect(navigateByUrl).toHaveBeenCalledWith('/inventory');
  });

  it('loads a remote sample account when configured', async () => {
    const sampleAccount = {
      email: 'olivia.wilson@x.dummyjson.com',
      username: 'oliviaw',
      password: 'oliviawpass',
      role: 'moderator',
      source: 'remote' as const,
    };
    const sampleAccountLoader = vi.fn().mockReturnValue(of(sampleAccount));

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthApiService, useValue: { sampleAccount: sampleAccountLoader } },
        { provide: AuthStore, useValue: { login: vi.fn(), status: () => 'idle' } },
        { provide: Router, useValue: { navigateByUrl: vi.fn() } },
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
            accountHint: null,
            remoteAccountPath: '/users/6',
          },
        },
      ],
    });

    const component = TestBed.runInInjectionContext(() => new LoginPageComponent());
    await vi.waitFor(() => {
      expect(component.accountHint()).toEqual(sampleAccount);
    });
    expect(sampleAccountLoader).toHaveBeenCalledWith('/users/6');
    expect(component.demoCredentials()).toEqual({
      username: 'oliviaw',
      password: 'oliviawpass',
    });
  });
});
