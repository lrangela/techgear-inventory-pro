import { describe, expect, it } from 'vitest';
import { CartStorageService } from './cart.storage';

describe('CartStorageService', () => {
  it('returns an empty cart and clears corrupted storage payloads', () => {
    sessionStorage.setItem('techgear_cart', '{broken-json');

    const service = new CartStorageService();

    expect(service.load()).toEqual([]);
    expect(sessionStorage.getItem('techgear_cart')).toBeNull();
  });
});
