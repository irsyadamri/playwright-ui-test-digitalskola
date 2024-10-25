const { expect } = require("@playwright/test");

export class CartPage {

    constructor(page){
        this.page = page
        this.pageiconcart1 = page.getByText('Sauce Labs Backpack');
        this.pageiconcart2 = page.getByText('Sauce Labs Bike Light');
        this.pageiconcart3 = page.getByText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        this.pageiconcart4 = page.getByText('Sauce Labs Fleece Jacket');
        
    }


///Data diatasnya adalah variabelnya
    async validateOnCarticon(){
       await expect(this.pageiconcart1 ).toBeVisible()
       await expect(this.pageiconcart2 ).toBeVisible()
       await expect(this.pageiconcart3 ).toBeVisible()
       await expect(this.pageiconcart4 ).toBeVisible()
    //    await expect(this.page).toHaveScreenshot()
       
        
    }

}