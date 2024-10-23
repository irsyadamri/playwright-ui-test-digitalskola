const { test, expect } = require("@playwright/test");

test.describe('Web UI Demo', () => {
    test('TC-1 Successful login using standar user', async ({ page }) => {


        await page.goto('https://www.saucedemo.com/');
        await expect(page.getByText('Swag Labs')).toBeVisible()

        await page.getByPlaceholder('Username').fill('standard_user')
        await page.locator('[id="password"]').fill('secret_sauce')
        await page.getByText('Login').click()

        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu'})).toBeVisible() 
        
        
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click()

        await page.locator('[data-test="shopping-cart-link"]').click()

        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
        await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible()
        await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible()
       
        
    });


    test('TC-2 Successful login using visual user', async ({ page }) => {


        await page.goto('https://www.saucedemo.com/');
        await expect(page.getByText('Swag Labs')).toBeVisible()

        await page.getByPlaceholder('Username').fill('visual_user')
        await page.locator('[id="password"]').fill('secret_sauce')
        await page.getByText('Login').click()

        await expect(page.getByText('Swag Labs')).toBeVisible()
        await expect(page.getByRole('button', { name: 'Open Menu'})).toBeVisible() 
        
        
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click()

        await page.locator('[data-test="shopping-cart-link"]').click()

        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible()
        await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible()
        await expect(page.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible()
       
        
    });
});


