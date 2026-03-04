import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  var __featuresAdminInventoryVitestInitDone__: boolean | undefined;
}

if (!globalThis.__featuresAdminInventoryVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__featuresAdminInventoryVitestInitDone__ = true;
}
