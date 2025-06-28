Feature: Login to SauceDemo

  Scenario: Successful login to SauceDemo
    Given I am on the SauceDemo login page
    When I enter "standard_user" and "secret_sauce"
    Then I should be redirected to the inventory page

  Scenario: Failed login to SauceDemo for Locked user
    Given I am on the SauceDemo login page
    When I enter "locked_out_user" and "secret_sauce"
    Then I should see the error message "Sorry, this user has been locked out."

  Scenario: Failed login to SauceDemo for Non-existent user
    Given I am on the SauceDemo login page
    When I enter "invalid_user" and "secret_sauce"
    Then I should see the error message "Username and password do not match any user in this service"
