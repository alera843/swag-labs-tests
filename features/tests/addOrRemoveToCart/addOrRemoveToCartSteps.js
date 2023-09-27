const {Given, When, Then} = require('@cucumber/cucumber');
const { util } = require('chai');
// const { util } = require('chai');
const utils = require('../../lib/utils');
const cartPage = require('../../support/pages/cartPage');
const inventoryItemPage = require('../../support/pages/inventoryItemPage');
const loginPage = require('../../support/pages/loginPage');
const productsPage = require('../../support/pages/productsPage');
const expect = require('chai').expect;

Given('I am logged in with {string} and I am on Products page', async function(value) {
    await this.page.goto('https://www.saucedemo.com/');
    await utils.clickAndTypeText(
        this.page,
        loginPage.usernameInput,
        value
    );
    await utils.clickAndTypeText(
        this.page,
        loginPage.passwordInput,
        "secret_sauce"
    );
    await utils.click(this.page, loginPage.loginButton);
    let pageTitle = await utils.getText(this.page, productsPage.pageTitle);
    await expect(pageTitle).to.equal("Products");
});

// When steps start here

When('I click {string} on products page', async function(productName) {
    await utils.click(this.page, productsPage[productName]);
});

When(/^I go to check my cart$/, async function() {
    await utils.click(this.page, productsPage.shoppingCart);
    let titleText = await utils.getText(this.page, cartPage.pageTitle)
    await expect(titleText).to.equal("Your Cart")
})

When('I {string} product from my cart', async function(removeProduct) {
    await utils.click(this.page, cartPage[removeProduct]);
})

When('I open the inventory item page for {string} product', async function(productName) {
    await utils.click(this.page, productsPage[productName]);
    // let itemName = await utils.getText(this.page, inventoryItemPage[inventoryName]);
    // await expect(itemName).to.equal()
})


// Then steps start here

Then(/^I should see that the button text changed to Remove$/,async function() {
    let removeButtonText = await utils.getText(this.page, productsPage.removeButtonBikeLight);
    await expect(removeButtonText).to.equal("Remove");
});

Then(/^I should see badge indication on the cart icon showing 1 product has been added$/, async function() {
    let cartBadgeIndication = await utils.getText(this.page, productsPage.shoppingCartIconBadgeCount);
    await expect(cartBadgeIndication).to.equal("1");
})

Then('I should see that the {string} button text is Add to cart', async function(productButton) {
    let addToCartButtonText = await utils.getText(this.page, productsPage[productButton]);
    await expect(addToCartButtonText).to.equal("Add to cart");
});

Then(/^the product should be removed$/, async function() {
    await expect(cartPage.removedProduct).to.exist
})

// Then('There is no badge indication on the cart icon', async function() {
//     let cartBadgeIndication = await utils.getText(this.page, productsPage.shoppingCartIconBadgeCount);
//     console.log(" towa e",cartBadgeIndication );
//     // await expect(cartBadgeIndication).to.be(null);
// })