import { expect, test } from '@playwright/test';
import { mockAdminApi } from './support/mock-api';

test.describe('admin-panel', () => {
  test('allows admin login and inventory navigation', async ({ page }) => {
    await mockAdminApi(page);
    await page.goto('/login');

    await expect(
      page.getByRole('heading', { name: 'TechGear Admin Panel' })
    ).toBeVisible();
    await expect(
      page.getByText('Admin access is restricted by role.')
    ).toBeVisible();
    await page.getByLabel('Username').fill('admin-demo');
    await page.getByLabel('Password').fill('AdminDemo123!');
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/\/products$/);
    await expect(page.getByRole('link', { name: 'Inventory' })).toBeVisible();
    await page.goto('/inventory');
    await expect(page).toHaveURL(/\/inventory$/);
  });

  test('@remote-auth loads API sample credentials and signs in with remote auth', async ({
    page,
  }) => {
    test.skip(!process.env.REMOTE_AUTH_E2E, 'Run only when remote auth E2E is explicitly enabled.');

    await page.goto('/login');

    await expect(
      page.getByRole('heading', { name: 'API Sample Account' })
    ).toBeVisible();
    await expect(page.getByText('emilys')).toBeVisible();
    await expect(page.getByText('Prefilled in the form for this API sample account.')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page).toHaveURL(/\/products$/);
    await expect(page.getByRole('link', { name: 'Inventory' })).toBeVisible();
  });
});
