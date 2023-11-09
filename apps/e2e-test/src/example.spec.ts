import { test, expect } from '@playwright/test';

test('screenshot test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('nx-welcome.png');
});
