import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog.service';

@Component({
  selector: 'lib-confirm-dialog-host',
  imports: [],
  templateUrl: './confirm-dialog-host.component.html',
  styleUrl: './confirm-dialog-host.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'onEscapeKey()',
  },
})
export class ConfirmDialogHostComponent {
  readonly confirmDialog = inject(ConfirmDialogService);

  onOverlayInteraction(event: Event): void {
    if (event.target === event.currentTarget) {
      this.confirmDialog.cancel();
    }
  }

  onEscapeKey(): void {
    if (this.confirmDialog.state()) {
      this.confirmDialog.cancel();
    }
  }
}
