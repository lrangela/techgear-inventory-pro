import { describe, expect, it } from 'vitest';
import { InventoryStorageService } from './inventory.storage';

describe('InventoryStorageService', () => {
  it('returns an empty inventory and clears corrupted storage payloads', () => {
    sessionStorage.setItem('techgear_inventory', '{broken-json');

    const service = new InventoryStorageService();

    expect(service.load()).toEqual({ items: [], movements: [] });
    expect(sessionStorage.getItem('techgear_inventory')).toBeNull();
  });
});
