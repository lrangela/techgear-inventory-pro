import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { describe, expect, it, vi } from 'vitest';
import { AuthStore } from '@techgear/data-access/auth';
import { App } from './app';

describe('AdminPanel App Shell', () => {
  it('exposes the authenticated user from the auth store', () => {
    const authStore = {
      isAuthenticated: vi.fn(() => true),
      user: vi.fn(() => ({
        username: 'admin-demo',
        name: 'Admin User',
        email: 'admin@test.dev',
      })),
      logout: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthStore, useValue: authStore },
        { provide: Router, useValue: { navigateByUrl: vi.fn() } },
      ],
    });

    const instance = TestBed.runInInjectionContext(() => new App());

    expect(instance).toBeTruthy();
    expect(instance.isAuthenticated()).toBe(true);
    expect(instance.currentUser()).toEqual({
      username: 'admin-demo',
      name: 'Admin User',
      email: 'admin@test.dev',
    });
  });

  it('logs out and redirects to login', async () => {
    const navigateByUrl = vi.fn().mockResolvedValue(true);
    const authStore = {
      isAuthenticated: vi.fn(() => false),
      user: vi.fn(() => null),
      logout: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: AuthStore, useValue: authStore },
        { provide: Router, useValue: { navigateByUrl } },
      ],
    });

    const instance = TestBed.runInInjectionContext(() => new App());
    await instance.logout();

    expect(authStore.logout).toHaveBeenCalledTimes(1);
    expect(navigateByUrl).toHaveBeenCalledWith('/login');
  });
});
