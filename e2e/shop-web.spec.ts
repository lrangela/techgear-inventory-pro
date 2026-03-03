import { expect, test } from '@playwright/test';
import { mockShopApi } from './support/mock-api';

test.describe('shop-web', () => {
  test('allows demo login and cart navigation', async ({ page }) => {
    await mockShopApi(page);
    await page.goto('/login');

    await expect(
      page.getByRole('heading', { name: 'TechGear Inventory Pro' })
    ).toBeVisible();

    await page.getByLabel('Username').fill('emilys');
    await page.getByLabel('Password').fill('emilyspass');
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/\/catalog$/);
    await expect(
      page.getByRole('heading', { name: 'Catalog' })
    ).toBeVisible();

    await expect(page.getByText('Wireless Headphones')).toBeVisible();
    await page.getByRole('link', { name: 'Cart' }).click();

    await expect(page).toHaveURL(/\/cart$/);
    await expect(
      page.getByRole('heading', { name: 'Shopping Cart' })
    ).toBeVisible();
    await expect(page.getByText('Your cart is empty')).toBeVisible();
  });
});
