import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom, tap } from 'rxjs';

export interface AppConfig {
  apiBaseUrl: string;
  authMode: 'mock' | 'remote';
}

const FALLBACK_CONFIG: AppConfig = {
  apiBaseUrl: 'https://dummyjson.com',
  authMode: 'mock',
};

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  private readonly http = inject(HttpClient);
  private config: AppConfig | null = null;

  loadConfig(): Promise<void> {
    return firstValueFrom(
      this.http.get<AppConfig>('assets/config.json').pipe(
        tap((config) => {
          this.config = config;
        })
      )
    ).then(() => {
      if (typeof ngDevMode !== 'undefined' && ngDevMode) {
        console.log('[AppConfig] Config loaded');
      }
    }).catch((err: unknown) => {
      console.error('[AppConfig] Failed to load config, using fallback:', err);
      this.config = { ...FALLBACK_CONFIG };
    });
  }

  get apiBaseUrl(): string {
    return this.config?.apiBaseUrl ?? '';
  }

  get authMode(): 'mock' | 'remote' {
    return this.config?.authMode ?? 'mock';
  }

  get rawConfig(): AppConfig | null {
    return this.config;
  }
}
