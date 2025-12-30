import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

// Explicit path to resources/.env
dotenv.config({
  path: './resources/.env'
});

export default defineConfig({
  // Global settings for all tests
  timeout: 30000,  // Global timeout for each test (in milliseconds)
  expect: {
    timeout: 5000,  // Timeout for expect assertions
  },

  // Specify the directory containing your test files
  testDir: './specs',  // Directory where your tests are located
  outputDir: './test-results',  // Directory to store test results (e.g., screenshots, videos)
});
