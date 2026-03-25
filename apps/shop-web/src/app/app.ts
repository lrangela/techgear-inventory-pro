import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogHostComponent, ErrorBannerComponent } from '@techgear/ui';

@Component({
  standalone: true,
  imports: [RouterOutlet, ErrorBannerComponent, ConfirmDialogHostComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App { }
