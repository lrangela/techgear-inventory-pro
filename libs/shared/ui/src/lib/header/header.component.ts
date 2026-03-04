import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'lib-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    readonly cartCount = input(0);
    readonly user = input<{ name?: string; email?: string; avatar?: string | null } | null>(null);
    readonly isAuthenticated = input(false);
    readonly userInitials = input('');

    readonly logout = output<void>();
}
