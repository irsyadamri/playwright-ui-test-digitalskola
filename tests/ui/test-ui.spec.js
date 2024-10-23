const { test } = require("@playwright/test");
const { LoginPage } = require("./page-object/login-page");
const { DashboardPage } = require("./page-object/dashboard");


test('TC-1 Successful login using page object', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const login_Page = new LoginPage(page)
    await login_Page.inputusername()
    await login_Page.inputpassword()
    await login_Page.clickbtnlogin()
    
    const dashboard_page = new DashboardPage(page)
    await dashboard_page.validateOnPage()
});