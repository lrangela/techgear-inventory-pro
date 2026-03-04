import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthStore, LOGIN_PAGE_CONFIG } from '@techgear/data-access/auth';
import { LoginCredentials, LoginFormComponent } from '@techgear/ui';

@Component({
  selector: 'lib-login-page',
  imports: [LoginFormComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly config = inject(LOGIN_PAGE_CONFIG);

  readonly isLoading = computed(() => this.authStore.status() === 'loading');
  readonly title = this.config.appTitle;
  readonly subtitle = this.config.subtitle;
  readonly demoAccount = this.config.demoAccount;
  readonly demoCredentials: LoginCredentials | null = this.demoAccount
    ? {
        username: this.demoAccount.username,
        password: this.demoAccount.password,
      }
    : null;

  readonly errorMessage = computed(() => {
    if (this.authStore.status() !== 'error') {
      return null;
    }
    return 'Unable to sign in. Check your credentials or network and try again.';
  });

  async onSubmit(credentials: LoginCredentials): Promise<void> {
    try {
      await this.authStore.login(credentials.username, credentials.password);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      const target =
        returnUrl && returnUrl.startsWith('/')
          ? returnUrl
          : this.config.defaultRedirectUrl;
      await this.router.navigateByUrl(target);
    } catch {
      // Store keeps the internal error details; UI shows a safe message.
    }
  }
}
