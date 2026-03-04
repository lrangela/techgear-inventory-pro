import { inject, Injectable, computed, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuthApiService } from '../api/auth.api';
import { AuthTokens, AuthUser } from '../models/auth.models';
import { TOKEN_STORAGE } from '../storage/token.storage';

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'error';

export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: AuthUser | null;
  status: AuthStatus;
  error: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  status: 'idle',
  error: null,
};

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly api = inject(AuthApiService);
  private readonly storage = inject(TOKEN_STORAGE);

  private readonly state = signal<AuthState>({ ...initialState });
  private refreshPromise: Promise<AuthTokens | null> | null = null;

  readonly accessToken = computed(() => this.state().accessToken);
  readonly refreshToken = computed(() => this.state().refreshToken);
  readonly user = computed(() => this.state().user);
  readonly status = computed(() => this.state().status);
  readonly error = computed(() => this.state().error);
  readonly isAuthenticated = computed(() => !!this.state().accessToken);

  initFromStorage(): void {
    const access = this.storage.getAccess();
    const refresh = this.storage.getRefresh();

    this.state.set({
      accessToken: access,
      refreshToken: refresh,
      user: null,
      status: access ? 'authenticated' : 'idle',
      error: null,
    });

    if (access) {
      void this.loadProfile().catch(() => {
        // Stored tokens may belong to a previous API/session. Reset safely on bootstrap.
        this.logout();
      });
    }
  }

  async login(username: string, password: string): Promise<void> {
    this.state.update((current) => ({
      ...current,
      status: 'loading',
      error: null,
    }));

    try {
      const tokens = await firstValueFrom(this.api.login({ username, password }));
      this.applyTokens(tokens);
      this.state.update((current) => ({
        ...current,
        status: 'authenticated',
      }));
      await this.loadProfile();
    } catch (error) {
      this.state.update((current) => ({
        ...current,
        status: 'error',
        error: this.formatError(error),
      }));
      throw error;
    }
  }

  async loadProfile(): Promise<void> {
    if (!this.state().accessToken) {
      return;
    }

    try {
      const user = await firstValueFrom(this.api.profile());
      this.state.update((current) => ({
        ...current,
        user,
      }));
    } catch (error) {
      this.state.update((current) => ({
        ...current,
        status: 'error',
        error: this.formatError(error),
      }));
      throw error;
    }
  }

  async refresh(): Promise<string | null> {
    if (this.refreshPromise) {
      const tokens = await this.refreshPromise;
      return tokens?.accessToken ?? null;
    }

    const refreshToken = this.state().refreshToken ?? this.storage.getRefresh();
    if (!refreshToken) {
      this.logout();
      return null;
    }

    this.refreshPromise = firstValueFrom(this.api.refresh(refreshToken))
      .then((tokens) => {
        this.applyTokens(tokens);
        return tokens;
      })
      .catch(() => {
        this.logout();
        return null;
      })
      .finally(() => {
        this.refreshPromise = null;
      });

    const tokens = await this.refreshPromise;
    return tokens?.accessToken ?? null;
  }

  logout(): void {
    this.storage.clear();
    this.state.set({ ...initialState });
  }

  private applyTokens(tokens: AuthTokens): void {
    this.storage.setAccess(tokens.accessToken);
    this.storage.setRefresh(tokens.refreshToken);

    this.state.update((current) => ({
      ...current,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    }));
  }

  private formatError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }

    return 'Auth error';
  }
}
