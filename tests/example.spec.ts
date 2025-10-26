import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test('Go to google', async ({ page }) => {
    await page.goto('https://www.google.com/');
    console.log('[INFO] Go to Google');
})