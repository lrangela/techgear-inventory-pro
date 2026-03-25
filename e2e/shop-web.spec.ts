import { expect, test } from '@playwright/test';
import { mockShopApi } from './support/mock-api';

test.describe('shop-web', () => {
  test('allows demo login, adding from catalog, and clearing the cart', async ({ page }) => {
    await mockShopApi(page);
    await page.goto('/login');

    await expect(
      page.getByRole('heading', { name: 'TechGear Inventory Pro' })
    ).toBeVisible();

    await page.getByLabel('Username').fill('shop-demo');
    await page.getByLabel('Password').fill('ShopDemo123!');
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/\/catalog$/);
    await expect(
      page.getByRole('heading', { name: 'Catalog' })
    ).toBeVisible();

    await expect(page.getByText('Wireless Headphones')).toBeVisible();
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.getByText('Wireless Headphones added to cart.')).toBeVisible();
    await page.getByRole('link', { name: 'Cart' }).click();

    await expect(page).toHaveURL(/\/cart$/);
    await expect(
      page.getByRole('heading', { name: 'Shopping Cart' })
    ).toBeVisible();
    await expect(page.getByText('Wireless Headphones')).toBeVisible();
    await page.getByRole('button', { name: 'Clear Cart' }).click();
    const confirmDialog = page.getByRole('dialog');
    await expect(confirmDialog).toBeVisible();
    await confirmDialog.getByRole('button', { name: 'Clear cart' }).click();
    await expect(page.getByText('Your cart is empty')).toBeVisible();

    await page.getByRole('link', { name: 'Back to catalog' }).click();
    await expect(page).toHaveURL(/\/catalog$/);
    await page.getByRole('button', { name: 'View' }).first().click();
    await expect(page).toHaveURL(/\/products\/1$/);
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'Cart' }).click();

    await expect(page).toHaveURL(/\/cart$/);
    await expect(
      page.getByRole('heading', { name: 'Shopping Cart' })
    ).toBeVisible();
    await expect(page.getByText('Wireless Headphones')).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Demo only: checkout not implemented' })
    ).toBeDisabled();
  });

  test('@remote-auth loads API sample credentials and signs in with remote auth', async ({
    page,
  }) => {
    test.skip(!process.env.REMOTE_AUTH_E2E, 'Run only when remote auth E2E is explicitly enabled.');

    await page.goto('/login');

    await expect(
      page.getByRole('heading', { name: 'API Sample Account' })
    ).toBeVisible();
    await expect(page.getByText('oliviaw')).toBeVisible();
    await expect(page.getByText('Prefilled in the form for this API sample account.')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/\/catalog$/);
    await expect(page.getByRole('heading', { name: 'Catalog' })).toBeVisible();
  });
});
