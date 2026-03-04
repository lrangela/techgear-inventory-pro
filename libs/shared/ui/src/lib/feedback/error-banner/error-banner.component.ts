import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { AppErrorSeverity, AppErrorState } from '@techgear/util';

@Component({
  selector: 'lib-error-banner',
  standalone: true,
  templateUrl: './error-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorBannerComponent {
  private readonly appErrorState = inject(AppErrorState);

  readonly error = this.appErrorState.latest;
  readonly isVisible = computed(() => !!this.error());

  readonly toneClass = computed(() => {
    const severity = this.error()?.severity;
    return this.getToneClass(severity ?? 'error');
  });

  dismiss(): void {
    this.appErrorState.clear();
  }

  private getToneClass(severity: AppErrorSeverity): string {
    switch (severity) {
      case 'info':
        return 'tg-border-sky-200 tg-bg-sky-50 tg-text-sky-800';
      case 'warning':
        return 'tg-border-amber-200 tg-bg-amber-50 tg-text-amber-800';
      case 'critical':
        return 'tg-border-rose-300 tg-bg-rose-100 tg-text-rose-900';
      default:
        return 'tg-border-rose-200 tg-bg-rose-50 tg-text-rose-800';
    }
  }
}
