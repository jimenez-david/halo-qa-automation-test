Feature: Inventory screen on SauceDemo Home page

  Background: 
    Given I am logged into SauceDemo

  Scenario: Viewing products on the inventory page
    Then I should see the following products:
      | product name               |
      | Sauce Labs Backpack        |
      | Sauce Labs Bike Light      |
      | Sauce Labs Bolt T-Shirt    |
      | Sauce Labs Fleece Jacket   |

  Scenario Outline: Sorting products by different criteria
    When I sort products by "<sort_by>"
    Then the products should be sorted according to "<sort_by>"

    Examples:
      | sort_by             |
      | Name (A to Z)       |
      | Name (Z to A)       |
      | Price (low to high) |
      | Price (high to low) |
