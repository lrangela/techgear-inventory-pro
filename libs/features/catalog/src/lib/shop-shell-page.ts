import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@techgear/ui';
import { ShopShellFacade } from './shop-shell.facade';

@Component({
  selector: 'lib-shop-shell-page',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './shop-shell-page.html',
  styleUrl: './shop-shell-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopShellPageComponent {
  private readonly facade = inject(ShopShellFacade);

  readonly isAuthenticated = this.facade.isAuthenticated;
  readonly currentUser = this.facade.currentUser;
  readonly userInitials = this.facade.userInitials;
  readonly cartCount = this.facade.cartCount;
  readonly logout = () => this.facade.logout();
}
