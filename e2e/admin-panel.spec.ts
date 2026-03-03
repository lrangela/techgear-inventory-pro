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
    await expect(page.getByText('emilys', { exact: true })).toBeVisible();
    await expect(page.getByText('emilyspass', { exact: true })).toBeVisible();
    await page.getByLabel('Username').fill('emilys');
    await page.getByLabel('Password').fill('emilyspass');
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeEnabled();
  });
});
