import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthStore } from '@techgear/data-access/auth';

@Component({
  selector: 'app-forbidden-page',
  imports: [RouterLink],
  template: `
    <section
      class="tg-mx-auto tg-flex tg-min-h-[60vh] tg-max-w-3xl tg-flex-col tg-items-start tg-justify-center tg-gap-6"
    >
      <p class="tg-text-xs tg-font-semibold tg-uppercase tg-tracking-[0.24em] tg-text-amber-700">
        Access control
      </p>
      <div class="tg-space-y-3">
        <h1 class="tg-text-4xl tg-font-bold tg-text-slate-900">Forbidden</h1>
        <p class="tg-max-w-2xl tg-text-base tg-text-slate-600">
          Your session is valid, but it does not have permission to access this admin area.
          This demo keeps the distinction explicit instead of bouncing you back to login.
        </p>
      </div>

      <div class="tg-rounded-2xl tg-border tg-border-amber-200 tg-bg-amber-50 tg-p-5">
        <p class="tg-text-sm tg-font-semibold tg-text-amber-900">
          Signed in as: {{ authStore.user()?.email || 'authenticated session' }}
        </p>
        <p class="tg-mt-2 tg-text-sm tg-text-amber-800">
          Request admin credentials or return to an allowed area.
        </p>
      </div>

      <div class="tg-flex tg-flex-wrap tg-gap-3">
        <a
          routerLink="/products"
          class="tg-inline-flex tg-items-center tg-rounded-md tg-bg-slate-900 tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-white hover:tg-bg-slate-700"
        >
          Back to products
        </a>
        <button
          type="button"
          (click)="logout()"
          class="tg-inline-flex tg-items-center tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-4 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-100"
        >
          Sign out
        </button>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForbiddenPageComponent {
  readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  async logout(): Promise<void> {
    this.authStore.logout();
    await this.router.navigateByUrl('/login');
  }
}
