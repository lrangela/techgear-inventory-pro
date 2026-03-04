import { Injectable, signal } from '@angular/core';

export type ConfirmDialogOptions = {
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: 'default' | 'danger';
};

type ConfirmDialogState = Required<ConfirmDialogOptions>;

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  readonly state = signal<ConfirmDialogState | null>(null);

  private pendingResolver: ((value: boolean) => void) | null = null;

  open(options: ConfirmDialogOptions): Promise<boolean> {
    if (this.pendingResolver) {
      this.pendingResolver(false);
    }

    this.state.set({
      title: options.title,
      message: options.message,
      confirmLabel: options.confirmLabel ?? 'Confirm',
      cancelLabel: options.cancelLabel ?? 'Cancel',
      variant: options.variant ?? 'default',
    });

    return new Promise<boolean>((resolve) => {
      this.pendingResolver = resolve;
    });
  }

  confirm(): void {
    this.finish(true);
  }

  cancel(): void {
    this.finish(false);
  }

  private finish(result: boolean): void {
    if (this.pendingResolver) {
      this.pendingResolver(result);
      this.pendingResolver = null;
    }
    this.state.set(null);
  }
}
