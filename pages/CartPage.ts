import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
       this.checkoutButton = page.locator('div.checkout-box shop-button a[href="/checkout"]');
    }

    async proceedToCheckout() {
        await this.checkoutButton.waitFor({ state: 'visible', timeout: 10000 });
        await this.checkoutButton.scrollIntoViewIfNeeded();
        await expect(this.checkoutButton).toBeVisible();
        await this.checkoutButton.click();
        await expect(this.page).toHaveURL(/checkout/);
        await this.page.waitForTimeout(2000);
        console.log('Navigated to Checkout page successfully');
    }

   
}
 