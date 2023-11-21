import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Run HomePage E2E Test', async ({ page }) => {
  await test.step('Test if the page title is displayed', async () => {
    await page.goto('/');
    const pageTitleLocator = page.locator('//*[@id="root"]/main/h1');
    await expect(pageTitleLocator).toHaveText('Home Page');
  });

  await test.step('Test accessibility', async () => {
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    await expect(accessibilityScanResults.violations).toEqual([]);
  });
});
