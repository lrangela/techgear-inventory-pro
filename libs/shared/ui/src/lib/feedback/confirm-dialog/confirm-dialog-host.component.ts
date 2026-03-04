import { ChangeDetectionStrategy, Component, HostListener, inject } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog.service';

@Component({
  selector: 'lib-confirm-dialog-host',
  imports: [],
  templateUrl: './confirm-dialog-host.component.html',
  styleUrl: './confirm-dialog-host.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogHostComponent {
  readonly confirmDialog = inject(ConfirmDialogService);

  onOverlayInteraction(event: Event): void {
    if (event.target === event.currentTarget) {
      this.confirmDialog.cancel();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.confirmDialog.state()) {
      this.confirmDialog.cancel();
    }
  }
}
