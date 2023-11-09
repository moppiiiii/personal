import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Run HomePage E2E Test', async ({ page }) => {
  await test.step('Test if the page title is displayed', async () => {
    await page.goto('/');
    const pageTitleLocator = page.locator('//*[@id="root"]/main/h1');
    await expect(pageTitleLocator).toHaveText('home page');
  });

  await test.step('Test accessibility', async () => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
