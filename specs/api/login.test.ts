import test, { expect } from '@playwright/test';
import * as dotenv from 'dotenv';
import { ApiClient } from '../../lib/api/ApiClient';

dotenv.config();

test('Admin is Able To Login Successfully', async ({ request }) => {
  const apiClient = new ApiClient(request);
  const loginPayload = {
    email: process.env.adminEmail,
    password: process.env.adminPassword
  };
  const response = await apiClient.postRequest('/user/login', loginPayload);
  expect(response.status()).toBe(200);
});

test.afterEach(async ({}, testInfo) => {
  console.log(`Finished test: ${testInfo.title} with status ${testInfo.status}`);
});

