const {Given, When, Then} = require('@cucumber/cucumber');
const { util } = require('chai');
const utils = require('../../lib/utils');
const cartPage = require('../../support/pages/cartPage');
const inventoryItemPage = require('../../support/pages/inventoryItemPage');
const loginPage = require('../../support/pages/loginPage');
const productsPage = require('../../support/pages/productsPage');
const checkoutStepOnePage = require('../../support/pages/checkoutStepOnePage');
const checkoutStepTwoPage = require('../../support/pages/checkoutStepTwoPage');
const checkoutCompletePage = require('../../support/pages/checkoutCompletePage');
const { pageTitle } = require('../../support/pages/cartPage');
const expect = require('chai').expect;

Given('I click {string} to add product to cart and go to my cart', async function(addToCartProductName) {
    await utils.click(this.page, productsPage[addToCartProductName]);
    await utils.click(this.page, productsPage.shoppingCart);
    let titleText = await utils.getText(this.page, cartPage.pageTitle);
    await expect(titleText).to.equal("Your Cart");
});

// When Steps start here

When(/^I click the checkout button on the cart page$/, async function() {
    await utils.click(this.page, cartPage.checkoutButton);
});

When(/^I click the continue button on the checkout step one page$/, async function() {
    await utils.click(this.page, checkoutStepOnePage.continueButton);
});

When(/^I click the checkout button on the checkout step two page$/, async function() {
    await utils.click(this.page, checkoutStepTwoPage.finishButton);
});

// Then steps start here

Then(/^I should be on the checkout complete page$/, async function() {
    let pageTitle = await utils.getText(this.page, checkoutCompletePage.title);
    await expect(pageTitle).to.equal("Checkout: Complete!");
});

Then(/^I should see the message for successful order$/, async function() {
    let successfulOrder = await utils.getText(this.page, checkoutCompletePage.successfulOrderMessage);
    await expect(successfulOrder).to.equal("Thank you for your order!");
})