const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');

// Step to navigate to the SauceDemo login page
Given('I am on the SauceDemo login page', async () => {
  await LoginPage.open();
});

// Step to enter username and password credentials
When('I enter {string} and {string}', async (username, password) => {
  await LoginPage.login(username, password);
});

// Step to verify successful login redirects to inventory page
Then('I should be redirected to the inventory page', async () => {
  const currentUrl = await browser.getUrl();
  expect(currentUrl).toContain('/inventory.html');
});

// Step to verify error message is displayed for failed login attempts
Then('I should see the error message {string}', async (expectedMessage) => {
  const errorMessageText = await LoginPage.getErrorMessageText();
  expect(errorMessageText).toContain(expectedMessage);
});
