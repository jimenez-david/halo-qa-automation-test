class LoginPage {
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get btnLogin() { return $('#login-button'); }
    get errorMessage() { return $('h3[data-test="error"]'); }

    /**
     * Navigate to the SauceDemo login page
     */
    async open() {
        await browser.url('/');
    }

    /**
     * Perform login with provided credentials
     * @param {string} username - The username to enter
     * @param {string} password - The password to enter
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * Get the text of the error message displayed on the page
     * @returns {Promise<string>} The error message text
     */
    async getErrorMessageText() {
        await this.errorMessage.waitForDisplayed({ timeout: 5000 }); // Wait for error message to be displayed before getting text
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
