import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { DataContractError } from './data-contract.error';

export type AppErrorKind = 'network' | 'http4xx' | 'http5xx' | 'contract' | 'auth' | 'unknown';

export type AppErrorSeverity = 'info' | 'warning' | 'error' | 'critical';

export interface AppError {
  code: string;
  message: string;
  severity: AppErrorSeverity;
  retriable: boolean;
  kind: AppErrorKind;
  status?: number;
  source?: string;
  timestamp: string;
}

export class AppErrorModel extends Error implements AppError {
  readonly code: string;
  readonly severity: AppErrorSeverity;
  readonly retriable: boolean;
  readonly kind: AppErrorKind;
  readonly status?: number;
  readonly source?: string;
  readonly timestamp: string;

  constructor(data: AppError) {
    super(data.message);
    this.name = 'AppErrorModel';
    this.code = data.code;
    this.severity = data.severity;
    this.retriable = data.retriable;
    this.kind = data.kind;
    this.status = data.status;
    this.source = data.source;
    this.timestamp = data.timestamp;
  }
}

export function normalizeAppError(error: unknown): AppErrorModel {
  const timestamp = new Date().toISOString();

  if (error instanceof AppErrorModel) {
    return error;
  }

  if (error instanceof DataContractError) {
    return new AppErrorModel({
      code: 'CONTRACT_ERROR',
      message: error.getIssuesSummary() || 'Invalid server payload.',
      severity: 'error',
      retriable: false,
      kind: 'contract',
      source: error.source,
      timestamp,
    });
  }

  if (error instanceof HttpErrorResponse) {
    const serverMessage =
      typeof error.error === 'object' && error.error !== null && 'message' in error.error
        ? String((error.error as { message?: unknown }).message ?? '')
        : '';

    if (error.status === 0) {
      return new AppErrorModel({
        code: 'NETWORK_ERROR',
        message: 'Network error. Please check your connection and try again.',
        severity: 'warning',
        retriable: true,
        kind: 'network',
        status: error.status,
        timestamp,
      });
    }

    if (error.status === 401 || error.status === 403) {
      return new AppErrorModel({
        code: 'AUTH_ERROR',
        message: serverMessage || 'Authentication error. Please sign in again.',
        severity: 'warning',
        retriable: true,
        kind: 'auth',
        status: error.status,
        timestamp,
      });
    }

    if (error.status >= 400 && error.status < 500) {
      return new AppErrorModel({
        code: `HTTP_${error.status}`,
        message: serverMessage || error.message || 'Request error.',
        severity: 'warning',
        retriable: false,
        kind: 'http4xx',
        status: error.status,
        timestamp,
      });
    }

    if (error.status >= 500) {
      return new AppErrorModel({
        code: `HTTP_${error.status}`,
        message: serverMessage || 'Server error. Please try again later.',
        severity: 'error',
        retriable: true,
        kind: 'http5xx',
        status: error.status,
        timestamp,
      });
    }
  }

  if (error instanceof Error) {
    const isAuthMessage = /auth|token|session|credential/i.test(error.message);

    return new AppErrorModel({
      code: isAuthMessage ? 'AUTH_ERROR' : 'UNKNOWN_ERROR',
      message: error.message || 'Unexpected error.',
      severity: isAuthMessage ? 'warning' : 'error',
      retriable: !isAuthMessage,
      kind: isAuthMessage ? 'auth' : 'unknown',
      timestamp,
    });
  }

  return new AppErrorModel({
    code: 'UNKNOWN_ERROR',
    message: 'Unexpected error.',
    severity: 'error',
    retriable: false,
    kind: 'unknown',
    timestamp,
  });
}

@Injectable({ providedIn: 'root' })
export class AppErrorState {
  private readonly latestSignal = signal<AppErrorModel | null>(null);
  private readonly historySignal = signal<AppErrorModel[]>([]);

  readonly latest = computed(() => this.latestSignal());
  readonly history = computed(() => this.historySignal());

  report(error: unknown): AppErrorModel {
    const appError = normalizeAppError(error);
    this.latestSignal.set(appError);
    this.historySignal.update((current) => [appError, ...current].slice(0, 20));

    if (typeof ngDevMode !== 'undefined' && ngDevMode) {
      console.error('[AppError]', appError, error);
    }

    return appError;
  }

  clear(): void {
    this.latestSignal.set(null);
  }
}
