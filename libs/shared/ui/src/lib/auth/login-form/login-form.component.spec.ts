import { TestBed } from '@angular/core/testing';
import { describe, expect, it, vi } from 'vitest';
import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  it('emits trimmed credentials when the form is valid', () => {
    const component = TestBed.runInInjectionContext(() => new LoginFormComponent());
    const emitSpy = vi.spyOn(component.submitCredentials, 'emit');

    component.onUsernameInput('  emilys  ');
    component.onPasswordInput('emilyspass');
    component.onSubmit(new Event('submit'));

    expect(emitSpy).toHaveBeenCalledWith({
      username: 'emilys',
      password: 'emilyspass',
    });
  });

  it('does not emit when the form is invalid', () => {
    const component = TestBed.runInInjectionContext(() => new LoginFormComponent());
    const emitSpy = vi.spyOn(component.submitCredentials, 'emit');

    component.onUsernameInput('ab');
    component.onPasswordInput('short');
    component.onSubmit(new Event('submit'));

    expect(component.usernameErrorMessage()).toBe('Username must be at least 3 characters.');
    expect(component.passwordErrorMessage()).toBe('Password must be at least 8 characters.');
    expect(emitSpy).not.toHaveBeenCalled();
  });
});
