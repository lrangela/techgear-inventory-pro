import { defineConfig } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'shop-web',
      testMatch: /shop-web\.spec\.ts/,
      use: {
        baseURL: 'http://127.0.0.1:4200',
      },
    },
    {
      name: 'admin-panel',
      testMatch: /admin-panel\.spec\.ts/,
      use: {
        baseURL: 'http://127.0.0.1:4201',
      },
    },
  ],
  webServer: {
    command: 'node ./tools/serve-playwright.cjs',
    url: 'http://127.0.0.1:4300/health',
    reuseExistingServer: false,
    stdout: 'pipe',
    stderr: 'pipe',
    timeout: 180_000,
  },
});
