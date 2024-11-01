const { defineConfig, devices } = require('@playwright/test');
const { channel } = require('diagnostics_channel');
const path = require('path'); 

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

module.exports = defineConfig({
  testDir: './tests',
  snapshotPathTemplate: 'tests/ui/snapshot/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  expect:{
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.5
    }
  },
  reporter: [
    ['list'],
    ['json', { outputFile: 'report/json/report.json' }],
    ['html', { outputFolder: 'report/html' , open: 'never' }]
    ],
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'desktop-smoke-test-chrome',
      use: {
         ...devices['Desktop Chrome'],
         userAgent:'staging-automation-test'
        },
        grep: /@smoke/
    },

    {
      name: 'desktop-smoke-test-edge',
      use: {
         ...devices['Desktop Edge'], channel: 'msedge',
         userAgent:'staging-automation-test'
        },
        grep: /@smoke/
    },

    {
      name: 'desktop-smoke-test-Firefox',
      use: {
         ...devices['Desktop Firefox'],
         userAgent:'staging-automation-test'
        },
        grep: /@smoke/
    },

    {
      name: 'desktop-API-test-Firefox',
      use: {
         ...devices['Desktop Firefox'],
         userAgent:'staging-automation-test'
        },
        grep: /@api/
    },
  
  ],
});

