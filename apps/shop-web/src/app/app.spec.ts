import { App } from './app';
import { describe, expect, it } from 'vitest';

describe('ShopWeb App Shell', () => {
  it('should expose the app class', () => {
    expect(App).toBeDefined();
  });

  it('should instantiate the app class', () => {
    const instance = new App();
    expect(instance).toBeTruthy();
  });
});
