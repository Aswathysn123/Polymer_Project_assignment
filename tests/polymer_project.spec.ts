import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


test.describe('Polymer Project Tests', () => {

    test('verify home page loads successfully and Click on each tabs', async ({ page }) => {

        const homePage = new HomePage(page);
        const categoryPage = new CategoryPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await homePage.navigate(); // Go to home page
        await homePage.goToMensOuterwear();  // Click the link
        // await page.goBack();
        await categoryPage.selectFirstProduct(); // click first product
        await productPage.addToCart(); // add to cart
        await productPage.goToCart(); 
        await cartPage.proceedToCheckout(); 
        await checkoutPage.fillCheckoutForm(
            'testuser@example.com',
            '1234567890',
            '123 Main Street',
           'New York',
            'NY',
            '10001',
            'test user',
            '4111111111111111',
            '123'
        );
       await checkoutPage.placeOrder();
       await expect(await checkoutPage.getSuccessMessage()).toBeVisible();

    });

     // Negative test case for empty fields and invaid email
     test('checkout with emplty fields and invalid email format ', async ({ page }) => {

        const checkoutPage = new CheckoutPage(page);
        const homePage = new HomePage(page);
        const categoryPage = new CategoryPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        await homePage.navigate(); // Go to home page
        await homePage.goToMensOuterwear();  // Click the link
        // await page.goBack();
        await categoryPage.selectFirstProduct(); // click first product
        await productPage.addToCart(); // add to cart
        await productPage.goToCart(); 
        await cartPage.proceedToCheckout();
        await page.goto('https://shop.polymer-project.org/checkout');
        const emailField = await checkoutPage.getEmailField();
        await emailField.fill('abc@');
        await checkoutPage.placeOrder();
    });

});


 


