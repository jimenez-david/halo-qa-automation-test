class InventoryPage {
  get productNames() { return $$('div.inventory_item_name'); }
  get productPrices() { return $$('div.inventory_item_price'); }
  get sortDropdown() { return $('select.product_sort_container'); }

  /**
   * Get all product names from the inventory page
   * @returns {Promise<Array<string>>} Array of product names
   */
  async getAllProductNames() {
    const products = await this.productNames;
    const productNames = [];
    for (let product of products) {
      productNames.push(await product.getText());
    }
    return productNames;
  }

  /**
   * Get all product prices from the inventory page
   * @returns {Promise<Array<number>>} Array of product prices as numbers
   */
  async getAllProductPrices() {
    const prices = await this.productPrices;
    const productPrices = [];
    for (let price of prices) {
      const priceText = await price.getText();
      const priceValue = parseFloat(priceText.replace('$', '')); // Remove the '$' symbol and convert to number
      productPrices.push(priceValue);
    }
    return productPrices;
  }

  /**
   * Select a sorting option from the dropdown
   * @param {string} option - The sorting option to select
   */
  async sortProducts(option) {
    await this.sortDropdown.selectByVisibleText(option);
  }

  /**
   * Get product names after sorting - assuming the products have been sorted previously (current state)
   * @param {string} sortBy - The sorting option used (for logging purposes)
   * @returns {Promise<Array<string>>} Array of product names in current order
   */
  async getSortedProductNames(sortBy) {
    const products = await this.productNames;
    const productNames = [];
    for (let product of products) {
      productNames.push(await product.getText());
    }
    return productNames;
  }
}

module.exports = new InventoryPage();
