import { expect, test } from '@playwright/test';
import { mockAdminApi } from './support/mock-api';

test.describe('admin-panel', () => {
  test('renders the admin login experience with demo credentials', async ({ page }) => {
    await mockAdminApi(page);
    await page.goto('/login');

    await expect(
      page.getByRole('heading', { name: 'TechGear Admin Panel' })
    ).toBeVisible();
    await expect(
      page.getByLabel('Demo credentials')
    ).toBeVisible();
    await expect(page.getByText('admin-demo', { exact: true })).toBeVisible();
    await expect(page.getByText('AdminDemo123!', { exact: true })).toBeVisible();
    await page.getByLabel('Username').fill('admin-demo');
    await page.getByLabel('Password').fill('AdminDemo123!');
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
  });
});
