import type { Page, Route } from '@playwright/test';

const demoUser = {
  id: 9001,
  username: 'admin-demo',
  email: 'admin.demo@techgear.dev',
  firstName: 'Admin',
  lastName: 'Demo',
  image: 'https://dummyjson.com/icon/emilys/128',
  role: 'admin',
};

const demoProducts = [
  {
    id: 1,
    title: 'Wireless Headphones',
    price: 199,
    description: 'Noise-cancelling over-ear headphones.',
    images: ['https://picsum.photos/seed/headphones/640/480'],
    thumbnail: 'https://picsum.photos/seed/headphones/640/480',
    category: 'audio',
  },
  {
    id: 2,
    title: 'Mechanical Keyboard',
    price: 129,
    description: 'Compact keyboard with tactile switches.',
    images: ['https://picsum.photos/seed/keyboard/640/480'],
    thumbnail: 'https://picsum.photos/seed/keyboard/640/480',
    category: 'accessories',
  },
  {
    id: 3,
    title: '4K Monitor',
    price: 349,
    description: '27-inch monitor for product demo flows.',
    images: ['https://picsum.photos/seed/monitor/640/480'],
    thumbnail: 'https://picsum.photos/seed/monitor/640/480',
    category: 'monitors',
  },
];

async function fulfillJson(route: Route, body: unknown): Promise<void> {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(body),
  });
}

async function mockSharedAuth(page: Page): Promise<void> {
  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  await page.route(/(https:\/\/dummyjson\.com|\/api)\/auth\/login$/, async (route) => {
    await fulfillJson(route, {
      accessToken: 'playwright-access-token',
      refreshToken: 'playwright-refresh-token',
    });
  });

  await page.route(/(https:\/\/dummyjson\.com|\/api)\/auth\/me$/, async (route) => {
    await fulfillJson(route, demoUser);
  });

  await page.route(/(https:\/\/dummyjson\.com|\/api)\/auth\/refresh$/, async (route) => {
    await fulfillJson(route, {
      accessToken: 'playwright-access-token',
      refreshToken: 'playwright-refresh-token',
    });
  });
}

export async function mockShopApi(page: Page): Promise<void> {
  await mockSharedAuth(page);

  await page.route(/(https:\/\/dummyjson\.com|\/api)\/products\/categories$/, async (route) => {
    await fulfillJson(route, ['audio', 'accessories', 'monitors']);
  });

  await page.route(/(https:\/\/dummyjson\.com|\/api)\/products(\?.*)?$/, async (route) => {
    await fulfillJson(route, {
      products: demoProducts,
      total: demoProducts.length,
      skip: 0,
      limit: 12,
    });
  });
}

export async function mockAdminApi(page: Page): Promise<void> {
  await mockSharedAuth(page);

  await page.route(/(https:\/\/dummyjson\.com|\/api)\/products(\?.*)?$/, async (route) => {
    await fulfillJson(route, {
      products: demoProducts,
      total: demoProducts.length,
      skip: 0,
      limit: 100,
    });
  });
}
