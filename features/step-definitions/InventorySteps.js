const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');

// Background step to ensure user is logged in before inventory tests
Given('I am logged into SauceDemo', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/inventory.html');
});

// Step to verify specific products are displayed on the inventory page
Then('I should see the following products:', async (dataTable) => {
    const products = await InventoryPage.getAllProductNames();
    dataTable.rows().forEach(row => {
        const expectedProduct = row[0];
        expect(products).toContain(expectedProduct);
    });
});

// Step to sort products using the dropdown
When('I sort products by {string}', async (sortBy) => {
    await InventoryPage.sortProducts(sortBy);
});

// Step to verify products are sorted according to the selected criteria
Then('the products should be sorted according to {string}', async (sortBy) => {
    const sortedProducts = await InventoryPage.getSortedProductNames(sortBy);

    // Verify sorting for Name (A to Z)
    if (sortBy === 'Name (A to Z)') {
        const expectedSorted = [...sortedProducts].sort();
        expect(sortedProducts).toEqual(expectedSorted);
    }

    // Verify sorting for Name (Z to A)
    if (sortBy === 'Name (Z to A)') {
        const expectedSorted = [...sortedProducts].sort().reverse();
        expect(sortedProducts).toEqual(expectedSorted);
    }

    // Verify sorting for Price (low to high)
    if (sortBy === 'Price (low to high)') {
        const productPrices = await InventoryPage.getAllProductPrices();
        const expectedSorted = [...productPrices].sort((a, b) => a - b);
        expect(productPrices).toEqual(expectedSorted);
    }

    // Verify sorting for Price (high to low)
    if (sortBy === 'Price (high to low)') {
        const productPrices = await InventoryPage.getAllProductPrices();
        const expectedSorted = [...productPrices].sort((a, b) => b - a);
        expect(productPrices).toEqual(expectedSorted);
    }
});
