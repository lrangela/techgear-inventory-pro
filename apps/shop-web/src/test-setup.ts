import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare global {
  var __shopWebVitestInitDone__: boolean | undefined;
}

if (!globalThis.__shopWebVitestInitDone__) {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  globalThis.__shopWebVitestInitDone__ = true;
}
