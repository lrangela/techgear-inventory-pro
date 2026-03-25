import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { AuthStore } from '../state/auth.store';
import { roleGuard } from './role.guard';

describe('roleGuard', () => {
  it('allows access when the authenticated user has the required role', async () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthStore,
          useValue: {
            isAuthenticated: () => true,
            user: () => ({ role: 'admin' }),
            ensureProfileLoaded: vi.fn(),
          },
        },
        {
          provide: Router,
          useValue: {
            url: '/products',
            createUrlTree: vi.fn(),
          },
        },
      ],
    });

    const result = await TestBed.runInInjectionContext(() =>
      roleGuard(
        { data: { roles: ['admin'] } } as ActivatedRouteSnapshot,
        { url: '/products' } as never
      )
    );

    expect(result).toBe(true);
  });

  it('redirects to login when the role does not match', async () => {
    const createUrlTree = vi.fn().mockReturnValue('LOGIN_TREE');
    const parseUrl = vi.fn().mockReturnValue('FORBIDDEN_TREE');

    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthStore,
          useValue: {
            isAuthenticated: () => true,
            user: () => ({ role: 'customer' }),
            ensureProfileLoaded: vi.fn(),
          },
        },
        {
          provide: Router,
          useValue: {
            url: '/inventory',
            createUrlTree,
            parseUrl,
          },
        },
      ],
    });

    const result = await TestBed.runInInjectionContext(() =>
      roleGuard(
        {
          data: { roles: ['admin'], unauthorizedRedirectTo: '/forbidden' },
        } as ActivatedRouteSnapshot,
        { url: '/inventory' } as never
      )
    );

    expect(result).toBe('FORBIDDEN_TREE');
    expect(parseUrl).toHaveBeenCalledWith('/forbidden');
    expect(createUrlTree).not.toHaveBeenCalled();
  });
});
