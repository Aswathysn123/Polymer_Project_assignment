import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly  page: Page;
    readonly  mensOuterwear: Locator;
    readonly ladiesOuterwear: Locator;
    readonly mensTshirts: Locator;
    readonly ladiesTshirts: Locator;

    constructor(page: Page) {
        this.page = page;
     
        this.mensOuterwear = page.getByRole('link', { name: "Men's Outerwear" }).first();
        this.ladiesOuterwear = page.getByRole('link', { name: "Ladies Outerwear" }).first();
        this.mensTshirts = page.getByRole('link', { name: "Men's T-Shirts" }).first();
        this.ladiesTshirts = page.getByRole('link', { name: "Ladies T-Shirts" }).first();
    }

    async navigate() {
        await this.page.goto('https://shop.polymer-project.org/');
    }
//  Check mens outer wear
    async goToMensOuterwear() { 
        await this.mensOuterwear.scrollIntoViewIfNeeded();   
        // await expect(this.page).toHaveURL('/list/mens_outerwear');
        await expect(this.mensOuterwear).toBeVisible();
        await this.mensOuterwear.click();
        await expect(this.page).toHaveURL(/mens_outerwear/);
    }
    // async verifyMensOuterwearPage() {
    //     // Check URL after click
    //     await expect(this.page).toHaveURL('/list\/mens_outerwear/');
    // }

    // Check ladies  outer wear
    async goToLadiesOuterwear() {
        await this.ladiesOuterwear.scrollIntoViewIfNeeded();   
        await expect(this.ladiesOuterwear).toBeVisible();
        await this.ladiesOuterwear.click();
        await expect(this.page).toHaveURL(/ladies_outerwear/);
    }
    // Check mens T-Shirts
    async goTomensTshirts() {

        await this.mensTshirts.scrollIntoViewIfNeeded();   
        await expect(this.mensTshirts).toBeVisible();
        await this.mensTshirts.click();
        await expect(this.page).toHaveURL(/mens_tshirts/);
    }
    // Check ladies T-shirts
    async goToladiesTshirts() {
        await this.ladiesTshirts.scrollIntoViewIfNeeded();   
        await expect(this.ladiesTshirts).toBeVisible();
        await this.ladiesTshirts.click();
        await expect(this.page).toHaveURL(/ladies_tshirts/);
    }
}
