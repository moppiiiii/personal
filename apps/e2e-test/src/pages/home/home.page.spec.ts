import { test, expect } from '@playwright/test';

test('Run HomePage E2E Test', async ({ page }) => {
  await page.goto('/');
  const pageTitleLocator = page.locator('//*[@id="root"]/div');
  await expect(pageTitleLocator).toHaveText('home page');
});
