import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { AuthApiService } from '../api/auth.api';
import { AuthTokens, AuthUser } from '../models/auth.models';
import { TOKEN_STORAGE } from '../storage/token.storage';

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'error';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthUser | null;
  status: AuthStatus;
  isRefreshing: boolean;
  error: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  status: 'idle',
  isRefreshing: false,
  error: null,
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState<AuthState>(initialState),
  withMethods((store, api = inject(AuthApiService), storage = inject(TOKEN_STORAGE)) => {
    let refreshPromise: Promise<string | null> | null = null;
    let profilePromise: Promise<AuthUser | null> | null = null;

    const formatError = (error: unknown): string => {
      if (error instanceof Error) {
        return error.message;
      }
      return 'Auth error';
    };

    const applyTokens = (tokens: AuthTokens): void => {
      storage.setAccess(tokens.accessToken);
      storage.setRefresh(tokens.refreshToken);

      patchState(store, {
        accessToken: tokens.accessToken,
        refreshToken: tokens.refreshToken,
      });
    };

    const logout = (): void => {
      api.clearSession();
      storage.clear();
      patchState(store, { ...initialState });
    };

    const ensureProfileLoaded = async (forceReload = false): Promise<AuthUser | null> => {
      if (!store.accessToken()) {
        return null;
      }

      if (!forceReload && store.user()) {
        return store.user();
      }

      if (profilePromise) {
        return profilePromise;
      }

      profilePromise = firstValueFrom(api.profile())
        .then((user) => {
          patchState(store, {
            user,
            status: 'authenticated',
            error: null,
          });
          return user;
        })
        .catch((error) => {
          patchState(store, {
            status: 'error',
            error: formatError(error),
          });
          throw error;
        })
        .finally(() => {
          profilePromise = null;
        });

      return profilePromise;
    };

    return {
      ensureProfileLoaded,
      initFromStorage(): void {
        const access = storage.getAccess();
        const refresh = storage.getRefresh();

        patchState(store, {
          accessToken: access,
          refreshToken: refresh,
          status: access ? 'authenticated' : 'idle',
        });

        if (access) {
          ensureProfileLoaded().catch(() => {
            logout();
          });
        }
      },

      async login(username: string, password: string): Promise<void> {
        patchState(store, { status: 'loading', error: null });

        try {
          const tokens = await firstValueFrom(api.login({ username, password }));
          applyTokens(tokens);
          patchState(store, { status: 'authenticated' });
          await ensureProfileLoaded(true);
        } catch (error) {
          patchState(store, {
            status: 'error',
            error: formatError(error),
          });
          throw error;
        }
      },

      async loadProfile(): Promise<void> {
        await ensureProfileLoaded();
      },

      async refresh(): Promise<string | null> {
        if (refreshPromise) {
          return refreshPromise;
        }

        const refreshToken = store.refreshToken() ?? storage.getRefresh();
        if (!refreshToken) {
          logout();
          return null;
        }

        patchState(store, { isRefreshing: true });

        refreshPromise = firstValueFrom(api.refresh(refreshToken))
          .then((tokens) => {
            applyTokens(tokens);
            return tokens.accessToken;
          })
          .catch(() => {
            logout();
            return null;
          })
          .finally(() => {
            refreshPromise = null;
            patchState(store, { isRefreshing: false });
          });

        return refreshPromise;
      },

      logout,
      isAuthenticated: () => !!store.accessToken(),
    };
  })
);
