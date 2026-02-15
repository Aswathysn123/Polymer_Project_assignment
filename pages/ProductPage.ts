import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    readonly cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = this.page.locator('shop-detail[visible] button').first();
        this.cartIcon = this.page.locator('shop-cart-modal.opened a', { hasText: 'View Cart' });
    }
   
    async addToCart() 
    {
        //shop-details page
        const detailPage = this.page.locator('shop-detail');
        await detailPage.waitFor({ state: 'visible', timeout: 10000 });
        // Verify the product title in details page
       const productTitle = detailPage.locator('h1.title'); // 
        //Click "Add to Cart" button inside
        await this.addToCartButton.click();
        console.log('Clicked Add to Cart');
   
    }

    async goToCart() 
    {

    await expect(this.cartIcon).toBeVisible();
    await this.cartIcon.click();
    await expect(this.page).toHaveURL(/cart/);
  
    console.log('Navigated to Cart page successfully');
    }

}


