# Halo QA Automation Test

This is an automated QA Automation Test for a QA position at Halo. The project demonstrates the use of WebdriverIO, Cucumber, and the Page Object Model (POM) design pattern to test the functionality of the SauceDemo application.

SauceDemo is a popular demo site for testing login flows and product inventory UI. The goal of this test is to showcase skills in test automation, web application testing, and maintaining a clean, scalable test automation framework.

## Tech Stack
- **WebdriverIO**: Selenium-based browser automation framework
- **Cucumber**: BDD-style syntax for writing features and scenarios
- **Node.js**: JavaScript runtime
- **Page Object Model**: Design pattern for reusable and maintainable page logic

## Project Structure
```
project-root/
├── features/                           # Contains all feature files
│   ├── login.feature                   # Login flow scenarios in Gherkin syntax
│   ├── inventory.feature               # Inventory page test scenarios in Gherkin syntax
│   └── step-definitions/               # Step definitions for the scenarios
│       ├── loginSteps.js               # Step implementation for login scenarios
│       └── InventorySteps.js           # Step implementation for inventory scenarios
├── pages/                              # Page Object Model (POM) classes
│   ├── LoginPage.js                    # Login page object
│   └── InventoryPage.js                # Inventory page object
├── wdio.conf.js                        # WebdriverIO configuration file
└── package.json                        # Project dependencies and scripts
```

### Explanation of Key Folders/Files:

- **features/**: Contains `.feature` files where the business logic for each functionality is described using Gherkin syntax. The `step-definitions/` folder holds the corresponding JavaScript step definition files that implement the actions specified in the feature files.

- **pages/**: Holds the Page Object Model (POM) classes. Each page (or component) of the application being tested has a corresponding JavaScript class that contains the methods for interacting with that page.

- **wdio.conf.js**: This file contains WebdriverIO configuration settings such as browser settings, test runner settings, and other essential configurations for running the tests.

- **package.json**: Manages project dependencies, scripts, and metadata for the project.

## Setup Instructions

### 1. Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### 2. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-project-directory>
```

### 3. Install Dependencies
```bash
npm install
```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Test Suites
```bash
# Run only login tests
npm run test:login

# Run only inventory tests
npm run test:inventory
```

### Run with WebdriverIO CLI
```bash
npm run wdio
```

## Test Credentials

Use the following SauceDemo credentials for testing:

| Username | Password | Description |
|----------|----------|-------------|
| `standard_user` | `secret_sauce` | Standard user with full access |
| `locked_out_user` | `secret_sauce` | Locked out user for error testing |
| `invalid_user` | `secret_sauce` | Non-existent user for error testing |

## Test Scenarios

### Login Tests
#### Successful Login Scenarios
**Reasoning**: As part of the exercise, automating the successful login scenario was a natural starting point. It's one of the most basic and fundamental flows to automate when setting up an initial test automation framework. This test helps establish that your framework is correctly set up and interacting with the application, ensuring the most common user flow works as expected.  
**Test Implementation**: Automated the scenario for logging into SauceDemo with valid credentials (username: standard_user, password: secret_sauce) and verified that the user is redirected to the inventory page.

#### Invalid Login Scenarios
**Reasoning**: Invalid login scenarios were chosen to demonstrate how to handle negative tests, where the goal is to check for proper error handling in the app. By automating these scenarios, I ensure the test suite includes checks for common edge cases, which is important to show that the framework can handle error conditions. These tests allow me to explore both the positive and negative branches of the app's login flow.  
**Test Implementation**: I automated scenarios for:  
Locked-out user: When the user is locked out, the application shows an error message.  
Invalid username: If a non-existent username is entered, the app should display a different error message, verifying the robustness of the login system.
#### Tests list
- Successful login with valid credentials
- Failed login with locked out user
- Failed login with invalid credentials

### Inventory Tests
**Reasoning**: Since the inventory page is a core feature of the SauceDemo app, automating scenarios for this page was necessary to show that the framework can handle real-world user interactions. It's important to test if the page displays products correctly, handles sorting, and ensures the page behaves as expected after logging in.  
**Test Implementation** I automated scenarios for:  
Viewing Products: Automated a test to ensure that the inventory page shows the correct products after login.  
Sorting Products: Automated the sorting functionality (by name and price), which is a common feature in product-based websites. This ensures that the framework supports interactions with dynamic content.
#### Test list
- Verify all expected products are displayed
- Sort products by Name (A to Z)
- Sort products by Name (Z to A)
- Sort products by Price (low to high)
- Sort products by Price (high to low)

## Test Reports

Test results are displayed in the console using the spec reporter. For more detailed reporting, you can configure additional reporters in `wdio.conf.js`.