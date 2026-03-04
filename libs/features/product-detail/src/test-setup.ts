import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  var __productDetailVitestInitDone__: boolean | undefined;
}

if (!globalThis.__productDetailVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__productDetailVitestInitDone__ = true;
}
