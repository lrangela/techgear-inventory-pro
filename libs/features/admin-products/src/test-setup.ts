import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  var __featuresAdminProductsVitestInitDone__: boolean | undefined;
}

if (!globalThis.__featuresAdminProductsVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__featuresAdminProductsVitestInitDone__ = true;
}
