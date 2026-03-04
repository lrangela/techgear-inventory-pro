import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { form, minLength, required } from '@angular/forms/signals';

export type LoginCredentials = {
  username: string;
  password: string;
};

@Component({
  selector: 'lib-login-form',
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  readonly loading = input(false);
  readonly error = input<string | null>(null);
  readonly prefillCredentials = input<LoginCredentials | null>(null);
  readonly submitCredentials = output<LoginCredentials>();

  private readonly model = signal<LoginCredentials>({
    username: '',
    password: '',
  });

  readonly loginForm = form(this.model, (formPath) => {
    required(formPath.username);
    minLength(formPath.username, 3);
    required(formPath.password);
    minLength(formPath.password, 8);
  });

  readonly usernameTouched = signal(false);
  readonly passwordTouched = signal(false);

  readonly usernameErrors = computed(() => this.loginForm.username().errors());
  readonly passwordErrors = computed(() => this.loginForm.password().errors());

  readonly usernameErrorMessage = computed(() => {
    if (!this.usernameTouched() || this.usernameErrors().length === 0) {
      return null;
    }

    const hasRequired = this.usernameErrors().some((error) => error.kind === 'required');
    if (hasRequired) {
      return 'Username is required.';
    }

    return 'Username must be at least 3 characters.';
  });

  readonly passwordErrorMessage = computed(() => {
    if (!this.passwordTouched() || this.passwordErrors().length === 0) {
      return null;
    }
    const hasRequired = this.passwordErrors().some((error) => error.kind === 'required');
    if (hasRequired) {
      return 'Password is required.';
    }
    return 'Password must be at least 8 characters.';
  });

  readonly disableSubmit = computed(() => this.loading() || !this.loginForm().valid());

  constructor() {
    effect(() => {
      const prefill = this.prefillCredentials();
      if (!prefill) {
        return;
      }
      this.loginForm.username().value.set(prefill.username);
      this.loginForm.password().value.set(prefill.password);
      this.usernameTouched.set(false);
      this.passwordTouched.set(false);
    });
  }

  onUsernameInput(value: string): void {
    this.loginForm.username().value.set(value);
  }

  onPasswordInput(value: string): void {
    this.loginForm.password().value.set(value);
  }

  onUsernameBlur(): void {
    this.usernameTouched.set(true);
    this.loginForm.username().markAsTouched();
  }

  onPasswordBlur(): void {
    this.passwordTouched.set(true);
    this.loginForm.password().markAsTouched();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.usernameTouched.set(true);
    this.passwordTouched.set(true);
    this.loginForm.username().markAsTouched();
    this.loginForm.password().markAsTouched();

    if (this.disableSubmit()) {
      return;
    }

    const value = this.loginForm().value();
    this.submitCredentials.emit({
      username: value.username.trim(),
      password: value.password,
    });
  }
}
