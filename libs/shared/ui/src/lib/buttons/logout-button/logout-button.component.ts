import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
    selector: 'lib-logout-button',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <button type="button"
            class="tg-inline-flex tg-items-center tg-rounded-md tg-border tg-border-slate-300 tg-bg-white tg-px-3 tg-py-2 tg-text-sm tg-font-medium tg-text-slate-700 hover:tg-bg-slate-100"
            (click)="logout.emit()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="tg-h-5 tg-w-5 sm:tg-hidden">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
            <span class="tg-hidden sm:tg-inline">{{ label() }}</span>
        </button>
    `,
})
export class LogoutButtonComponent {
    readonly label = input('Logout');
    readonly logout = output<void>();
}
