import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { ShopShellFacade } from './shop-shell.facade';

export function provideCatalogShellInitializer(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppInitializer(() => {
      const facade = inject(ShopShellFacade);
      facade.init();
    }),
  ]);
}
