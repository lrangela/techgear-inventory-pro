import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthApiService, AuthStore, LOGIN_PAGE_CONFIG } from '@techgear/data-access/auth';
import { LoginCredentials, LoginFormComponent } from '@techgear/ui';

@Component({
  selector: 'lib-login-page',
  imports: [LoginFormComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly authApi = inject(AuthApiService);
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly config = inject(LOGIN_PAGE_CONFIG);
  private readonly remoteAccountSignal = signal<{
    email: string;
    username: string;
    password: string;
    role?: string | null;
    source: 'mock' | 'remote';
  } | null>(null);

  readonly isLoading = computed(() => this.authStore.status() === 'loading');
  readonly title = this.config.appTitle;
  readonly subtitle = this.config.subtitle;
  readonly accountHint = computed(() => this.remoteAccountSignal() ?? this.config.accountHint);
  readonly accountHintTitle = computed(() =>
    this.accountHint()?.source === 'remote' ? 'API Sample Account' : 'Demo Credentials'
  );
  readonly accountHintMessage = computed(() =>
    this.accountHint()?.source === 'remote'
      ? 'This sample account is fetched from DummyJSON. The username is shown below and the password is prefilled in the form so you can test the remote login flow without exposing it in the UI.'
      : 'Use the sample account below to access the public demo build.'
  );
  readonly demoCredentials = computed<LoginCredentials | null>(() => {
    const account = this.accountHint();
    return account
      ? {
          username: account.username,
          password: account.password,
        }
      : null;
  });
  readonly accessNotice = computed(() => {
    const reason = this.route.snapshot.queryParamMap.get('reason');
    if (reason === 'role') {
      return 'Your account is authenticated, but it is not authorized for this area.';
    }

    return null;
  });

  readonly errorMessage = computed(() => {
    if (this.authStore.status() !== 'error') {
      return null;
    }
    return 'Unable to sign in. Check your credentials or network and try again.';
  });

  constructor() {
    const remoteAccountPath = this.config.remoteAccountPath;
    if (remoteAccountPath) {
      void this.loadRemoteAccount(remoteAccountPath);
    }
  }

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

  private async loadRemoteAccount(path: string): Promise<void> {
    try {
      const account = await firstValueFrom(this.authApi.sampleAccount(path));
      this.remoteAccountSignal.set(account);
    } catch {
      this.remoteAccountSignal.set(null);
    }
  }
}
