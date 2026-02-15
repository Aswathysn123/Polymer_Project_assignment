import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    readonly email: Locator;
    readonly phone: Locator;
    readonly address: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zip: Locator;
    readonly cardHolderName: Locator;
    readonly cardNumber: Locator;
    readonly cvv: Locator;
    readonly placeOrderButton: Locator;
    readonly confirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.email = page.locator('#accountEmail');
        this.phone = page.locator('#accountPhone');
        this.address = page.locator('#shipAddress');
        this.city = page.locator('#shipCity');
        this.state = page.locator('#shipState');
        this.zip = page.locator('#shipZip');
        this.cardHolderName = page.locator('#ccName');
        this.cardNumber = page.locator('#ccNumber');
        this.cvv = page.locator('#ccCVV');
        this.placeOrderButton = page.locator('shop-button#submitBox input[value="Place Order"]');
        this.confirmationMessage = page.locator("h1:has-text('Thank you')");
    }

    async fillCheckoutForm(email: string, phone: string, address: string, city: string, state: string, zip: string, cardHolderName: string, cardNumber: string, cvv: string) {
        await this.email.fill(email);
        await this.phone.fill(phone);
        await this.address.fill(address);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zip.fill(zip);
        await this.cardHolderName.fill(cardHolderName);
        await this.cardNumber.fill(cardNumber);
        await this.cvv.fill(cvv);
        await this.page.waitForTimeout(2000);
    }

    async placeOrder() {
        // await expect(this.placeOrderButton).toBeVisible({ timeout: 10000 });
        await expect(this.placeOrderButton).toBeVisible();
        await this.placeOrderButton.click();
        await expect(this.page).toHaveURL(/success/);
        console.log('Clicked Place Order successfully');
    }

    async getSuccessMessage() {
        return this.confirmationMessage;
    }

    async getEmailField() {
        return this.email;
    }
}
