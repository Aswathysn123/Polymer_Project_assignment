import { Page, Locator,expect } from '@playwright/test';

export class CategoryPage {
    readonly page: Page;
    readonly firstProduct: Locator;
    constructor(page: Page) {
        this.page = page;
        // this.productName = "Men's Tech Shell Full-Zip";
        this.firstProduct = page.locator('ul.grid li a shop-list-item div.title').first();
    }

    async selectFirstProduct() {
    // const productList = this.page.locator('ul.grid li'); // select the ul li tag
    await this.firstProduct.first().waitFor({ state: 'visible', timeout: 10000 });

    // Click the div inside the first <li>
    await this.firstProduct.scrollIntoViewIfNeeded();
    await expect(this.firstProduct).toBeVisible();
    await this.firstProduct.click();
    
}

}