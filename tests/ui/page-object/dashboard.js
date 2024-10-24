const { expect } = require("@playwright/test");

export class DashboardPage {

    constructor(page){
        this.pageTitle = page.getByText('Swag Labs');
        this.menuButton = page.getByRole('button', {name: 'Open Menu'})

        this.item1 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.item2 = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')
        this.item3 = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.item4 = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')

        this.btncart = page.locator('[data-test="shopping-cart-link"]')


    }


///Data diatasnya adalah variabelnya
    async validateOnPage(){
        expect(this.pageTitle).toBeVisible()
        expect(this.menuButton).toBeVisible()
    }

    async clickbtnAddToCart() {
        await this.item1.click()
        await this.item2.click()
        await this.item3.click()
        await this.item4.click()
     }

     async clickbtnCart() {
        await this.btncart.click()
     }
}