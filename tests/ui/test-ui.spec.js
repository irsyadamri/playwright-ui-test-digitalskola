const { afterEach } = require("node:test");
const { test } = require("./base/base-test");
const { LoginPage } = require("./page-object/login-page");

test('TC-1 Successful login using page object - standard user', async ({ LoginPage, DashboardPage, CartPage }) => {

    await LoginPage.login(process.env.STANDARD_USER, process.env.PASSWORD)
    await DashboardPage.validateOnPage()

    await DashboardPage.clickbtnAddToCart()
    await DashboardPage.clickbtnCart()

    await CartPage.validateOnCarticon()
});

test('TC-2 Successful login using page object - visual user', { tag: ['@smoke']} ,async ({ LoginPage, DashboardPage, CartPage }) => {
    
    await LoginPage.login(process.env.VISUAL_USER, process.env.PASSWORD)
    await DashboardPage.validateOnPage()

    await DashboardPage.clickbtnAddToCart()
    await DashboardPage.clickbtnCart()

    await CartPage.validateOnCarticon()
});


test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        console.log("Test failed, peform screenshot");
        const image = await page.screenshot({fullPage: true})
        testInfo.attach('failed test', {
            body: image,
            contentType: 'image/png',
        });
    }
})