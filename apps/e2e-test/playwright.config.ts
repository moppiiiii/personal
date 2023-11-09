import { defineConfig } from '@playwright/test';
import { nxE2EPreset } from '@nx/playwright/preset';

import { workspaceRoot } from '@nx/devkit';

const baseURL = process.env['BASE_URL'] || 'http://localhost:4200';

export default defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  use: {
    baseURL,
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'nx run-many --target serve -p frontend backend --parallel',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,
    cwd: workspaceRoot
  }
});
