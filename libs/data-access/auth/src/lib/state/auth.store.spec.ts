import { TestBed } from '@angular/core/testing';
import { of, Subject, throwError } from 'rxjs';
import { describe, beforeEach, expect, it, vi } from 'vitest';
import { AuthApiService } from '../api/auth.api';
import { AuthTokens, AuthUser } from '../models/auth.models';
import { AuthStore } from './auth.store';
import { TOKEN_STORAGE, TokenStorage } from '../storage/token.storage';

describe('AuthStore', () => {
  const mockUser: AuthUser = {
    id: 1,
    username: 'qa-user',
    email: 'qa@example.com',
    name: 'QA User',
    avatar: 'https://example.com/avatar.png',
    role: 'admin',
  };

  const mockTokens: AuthTokens = {
    accessToken: 'access-token-1',
    refreshToken: 'refresh-token-1',
  };

  let store: AuthStore;
  let authApiMock: {
    login: ReturnType<typeof vi.fn>;
    profile: ReturnType<typeof vi.fn>;
    refresh: ReturnType<typeof vi.fn>;
    clearSession: ReturnType<typeof vi.fn>;
  };
  let storageMock: {
    getAccess: ReturnType<typeof vi.fn>;
    setAccess: ReturnType<typeof vi.fn>;
    getRefresh: ReturnType<typeof vi.fn>;
    setRefresh: ReturnType<typeof vi.fn>;
    clear: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    authApiMock = {
      login: vi.fn(),
      profile: vi.fn(),
      refresh: vi.fn(),
      clearSession: vi.fn(),
    };

    storageMock = {
      getAccess: vi.fn(() => null),
      setAccess: vi.fn(),
      getRefresh: vi.fn(() => null),
      setRefresh: vi.fn(),
      clear: vi.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        AuthStore,
        { provide: AuthApiService, useValue: authApiMock },
        { provide: TOKEN_STORAGE, useValue: storageMock as TokenStorage },
      ],
    });

    store = TestBed.inject(AuthStore);
  });

  it('initFromStorage() should restore access token and load profile', async () => {
    storageMock.getAccess.mockReturnValue(mockTokens.accessToken);
    storageMock.getRefresh.mockReturnValue(mockTokens.refreshToken);
    authApiMock.profile.mockReturnValue(of(mockUser));

    store.initFromStorage();

    await Promise.resolve();

    expect(store.status()).toBe('authenticated');
    expect(store.accessToken()).toBe(mockTokens.accessToken);
    expect(store.refreshToken()).toBe(mockTokens.refreshToken);
    expect(store.user()).toEqual(mockUser);
    expect(authApiMock.profile).toHaveBeenCalledTimes(1);
  });

  it('initFromStorage() should logout when profile load fails', async () => {
    storageMock.getAccess.mockReturnValue(mockTokens.accessToken);
    storageMock.getRefresh.mockReturnValue(mockTokens.refreshToken);
    authApiMock.profile.mockReturnValue(
      throwError(() => new Error('profile failed'))
    );

    store.initFromStorage();

    await vi.waitFor(() => {
      expect(storageMock.clear).toHaveBeenCalledTimes(1);
    });
    expect(store.accessToken()).toBeNull();
    expect(store.refreshToken()).toBeNull();
    expect(store.user()).toBeNull();
    expect(store.status()).toBe('idle');
    expect(store.error()).toBeNull();
  });

  it('login() should move status idle -> loading -> authenticated and load profile', async () => {
    const loginSubject = new Subject<AuthTokens>();

    authApiMock.login.mockReturnValue(loginSubject.asObservable());
    authApiMock.profile.mockReturnValue(of(mockUser));
    const applyTokensSpy = vi.spyOn(storageMock, 'setAccess');

    const loginPromise = store.login('qa-user', 'secret');

    expect(store.status()).toBe('loading');

    loginSubject.next(mockTokens);
    loginSubject.complete();

    await loginPromise;

    expect(store.status()).toBe('authenticated');
    expect(applyTokensSpy).toHaveBeenCalledWith(mockTokens.accessToken);
    expect(storageMock.setRefresh).toHaveBeenCalledWith(mockTokens.refreshToken);
    expect(store.accessToken()).toBe(mockTokens.accessToken);
    expect(store.refreshToken()).toBe(mockTokens.refreshToken);
    expect(store.user()).toEqual(mockUser);
    expect(authApiMock.profile).toHaveBeenCalledTimes(1);
  });

  it('login() should set error status when login fails', async () => {
    authApiMock.login.mockReturnValue(
      throwError(() => new Error('invalid credentials'))
    );

    await expect(store.login('qa-user', 'wrong')).rejects.toThrow(
      'invalid credentials'
    );

    expect(store.status()).toBe('error');
    expect(store.error()).toBeTruthy();
  });

  it('refresh() should call api.refresh(refreshToken) and update tokens', async () => {
    const refreshedTokens: AuthTokens = {
      accessToken: 'access-token-2',
      refreshToken: 'refresh-token-2',
    };

    storageMock.getRefresh.mockReturnValue('refresh-token-1');
    authApiMock.refresh.mockReturnValue(of(refreshedTokens));

    const result = await store.refresh();

    expect(result).toBe('access-token-2');
    expect(authApiMock.refresh).toHaveBeenCalledWith('refresh-token-1');
    expect(store.accessToken()).toBe('access-token-2');
    expect(store.refreshToken()).toBe('refresh-token-2');
    expect(storageMock.setAccess).toHaveBeenCalledWith('access-token-2');
    expect(storageMock.setRefresh).toHaveBeenCalledWith('refresh-token-2');
  });

  it('refresh() should avoid concurrent refresh calls', async () => {
    const refreshSubject = new Subject<AuthTokens>();
    authApiMock.refresh.mockReturnValue(refreshSubject.asObservable());
    storageMock.getRefresh.mockReturnValue('refresh-token-1');

    const call1 = store.refresh();
    const call2 = store.refresh();

    expect(authApiMock.refresh).toHaveBeenCalledTimes(1);

    refreshSubject.next({
      accessToken: 'access-token-concurrent',
      refreshToken: 'refresh-token-concurrent',
    });
    refreshSubject.complete();

    await expect(call1).resolves.toBe('access-token-concurrent');
    await expect(call2).resolves.toBe('access-token-concurrent');
  });

  it('refresh() should logout and clear storage when refresh fails', async () => {
    storageMock.getRefresh.mockReturnValue('refresh-token-1');
    authApiMock.refresh.mockReturnValue(
      throwError(() => new Error('refresh failed'))
    );

    await expect(store.refresh()).resolves.toBeNull();

    expect(storageMock.clear).toHaveBeenCalledTimes(1);
    expect(store.accessToken()).toBeNull();
    expect(store.refreshToken()).toBeNull();
    expect(store.user()).toBeNull();
    expect(store.status()).toBe('idle');
  });

  it('logout() should clear storage and reset to initial state', () => {
    storageMock.getAccess.mockReturnValue(mockTokens.accessToken);
    storageMock.getRefresh.mockReturnValue(mockTokens.refreshToken);
    authApiMock.profile.mockReturnValue(of(mockUser));
    store.initFromStorage();

    store.logout();

    expect(authApiMock.clearSession).toHaveBeenCalledTimes(1);
    expect(storageMock.clear).toHaveBeenCalledTimes(1);
    expect(store.accessToken()).toBeNull();
    expect(store.refreshToken()).toBeNull();
    expect(store.user()).toBeNull();
    expect(store.status()).toBe('idle');
    expect(store.error()).toBeNull();
  });
});
