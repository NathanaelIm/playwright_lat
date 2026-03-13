import {test, expect} from '@playwright/test';

test.describe('Login', () => {
  test.beforeEach(async ({page}) => {
    // Navigate to the CURA Healthcare Service demo site
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await expect(page).toHaveTitle('CURA Healthcare Service');
    // Click on the "Make Appointment" link
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await expect(page.locator('#login')).toContainText('Please login to make appointment.');
    await expect(page.getByText('Please login to make')).toBeVisible();
  });
  test('should login successfully with valid credentials', async ({page}) => {
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('John Doe');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('ThisIsNotAPassword');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator('h2')).toContainText('Make Appointment');
  });
    test('should login failed with invalid credentials', async ({page}) => {
        await page.getByLabel('Username').click();
        await page.getByLabel('Username').fill('test');
        await page.getByLabel('Password').click();
        await page.getByLabel('Password').fill('test');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page.getByText('Login failed! Please ensure')).toBeVisible();
        await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');
  });
});