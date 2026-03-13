import{test,expect}from '@playwright/test';
test('should display the correct title',async({page})=>{
      // Go to the home page
    await page.goto("https://katalon-demo-cura.herokuapp.com/");

    // Assert if the title is correct
    await expect(page).toHaveTitle("CURA Healthcare Service");

    // Assert header text
    await expect(page.locator('//h1')).toHaveText('CURA Healthcare Service')
});
 test.only('demo locator', async ({page}) => {
  // Navigate to the CURA Healthcare Service demo site
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await expect(page).toHaveTitle('CURA Healthcare Service');
    // Click on the "Make Appointment" link
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await expect(page.locator('#login')).toContainText('Please login to make appointment.');
    await expect(page.getByText('Please login to make')).toBeVisible();
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('John Doe');
    let locatorPassword=page.getByLabel('Password')
    await locatorPassword.click();
    await locatorPassword.fill('ThisIsNotAPassword');
    await page.getByRole('button', { name: 'Login' }).click();  
    console.log(`>>> locatorPassword: ${typeof locatorPassword},the value locator is ${JSON.stringify(locatorPassword)}`);
    await expect(page.locator('h2')).toContainText('Make Appointment');
  });