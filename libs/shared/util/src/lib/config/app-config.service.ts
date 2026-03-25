import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom, tap } from 'rxjs';

export interface AppConfig {
  apiBaseUrl: string;
  authMode: 'mock' | 'remote';
}

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
