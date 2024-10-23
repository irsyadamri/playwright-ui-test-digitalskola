const { expect } = require("@playwright/test");

export class DashboardPage {

    constructor(page){
        this.pageTitle = page.getByText('Swag Labs');
        this.menuButton = page.getByRole('button', {name: 'Open Menu'})
    }

    async validateOnPage(){
        expect(this.pageTitle).toBeVisible()
        expect(this.menuButton).toBeVisible()
    }
}