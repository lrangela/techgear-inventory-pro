import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  var __authVitestInitDone__: boolean | undefined;
}

if (!globalThis.__authVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__authVitestInitDone__ = true;
}
