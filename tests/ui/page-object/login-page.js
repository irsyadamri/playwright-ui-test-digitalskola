export class LoginPage {
 
    constructor(page) {
        this.usernameTextBox = page.getByPlaceholder('Username')
        this.passwordTextBox = page.getByPlaceholder('Password')
        this.LoginButton = page.getByText('Login')
    }

    async inputusername() {
       await this.usernameTextBox.fill('standard_user')
    }

    async inputpassword() {
       await this.passwordTextBox.fill('secret_sauce')
    }

    async clickbtnlogin() {
       await this.LoginButton.click()
    }
}