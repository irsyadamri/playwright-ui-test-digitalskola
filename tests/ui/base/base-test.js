const { test: base } = require("@playwright/test");
const { LoginPage } = require("../page-object/login-page");
const { DashboardPage } = require("../page-object/dashboard");
const { CartPage} = require("../page-object/cart-page");

export const test = base.extend({
    LoginPage: async ({page}, use) => {
        const untuklogin = new LoginPage(page)
        await untuklogin.navigate()
        await use(untuklogin);
    },

    DashboardPage: async ({page}, use) => {
        await use(new DashboardPage(page));
    },

    CartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    
    
});