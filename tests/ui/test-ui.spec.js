const { test } = require("./base/base-test");
const { LoginPage } = require("./page-object/login-page");

test('TC-1 Successful login using page object - standard user', async ({ LoginPage, DashboardPage, CartPage }) => {

    await LoginPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
    await DashboardPage.validateOnPage()

    await DashboardPage.clickbtnAddToCart()
    await DashboardPage.clickbtnCart()

    await CartPage.validateOnCarticon()
});

test('TC-2 Successful login using page object - visual user', async ({ LoginPage, DashboardPage, CartPage }) => {
    
    await LoginPage.login(process.env.VISUAL_USER, process.env.PASSWORD)
    await DashboardPage.validateOnPage()

    await DashboardPage.clickbtnAddToCart()
    await DashboardPage.clickbtnCart()

    await CartPage.validateOnCarticon()
});


test.beforeAll(async () => {
    console.log("Di eksekusi dari before all - melakukan setup test env")
});

test.beforeEach(async () => {
    console.log("Di eksekusi dari before each - melakukan clean up item di cart")
});
