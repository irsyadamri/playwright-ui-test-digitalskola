export class LoginPage {
 
    constructor(page) {
        this.page = page
        this.usernameTextBox = page.getByPlaceholder('Username')
        this.passwordTextBox = page.getByPlaceholder('Password')
        this.LoginButton = page.getByText('Login')
    }

    async navigate() {
      await this.page.goto("https://www.saucedemo.com/");
   }

    async inputusername(username) {
       await this.usernameTextBox.fill(username)
    }

    async inputpassword(password) {
       await this.passwordTextBox.fill(password)
    }

    async clickbtnlogin() {
       await this.LoginButton.click()
    }

    ////me variable kan data diatas
    async login(username, password){
      await this.inputusername(username)
      await this.inputpassword(password)
      await this.clickbtnlogin()
    }
}