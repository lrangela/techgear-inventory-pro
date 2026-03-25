import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthStore } from '@techgear/data-access/auth';
import { ConfirmDialogHostComponent, ErrorBannerComponent } from '@techgear/ui';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ErrorBannerComponent,
    ConfirmDialogHostComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  readonly isAuthenticated = computed(() => this.authStore.isAuthenticated());
  readonly currentUser = computed(() => this.authStore.user());
  async logout(): Promise<void> {
    this.authStore.logout();
    await this.router.navigateByUrl('/login');
  }
}
