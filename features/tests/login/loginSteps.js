const {Given, When, Then} = require('@cucumber/cucumber');
// const { util } = require('chai');
const utils = require('../../lib/utils');
const checkoutStepOnePage = require('../../support/pages/checkoutStepOnePage');
// const { usernameInput, loginButton } = require('../../support/pages/loginPage');
const loginPage = require('../../support/pages/loginPage');
const productsPage = require('../../support/pages/productsPage');
const expect = require('chai').expect;

Given(/^I have opened the login page$/, async function() {
    await this.page.goto('https://www.saucedemo.com/')
});

When('I type {string} value in the {string} field',
	async function (value, textField) {
		switch (textField) {
			case 'username':
				await utils.clickAndTypeText(
					this.page,
					loginPage.usernameInput,
					value
				);
				break;
			case 'password':
				await utils.clickAndTypeText(
					this.page,
					loginPage.passwordInput,
					value
				);
                await this.page.waitForTimeout(1000);
				break;
			case 'name':
				await utils.clickAndTypeText(
					this.page,
					checkoutStepOnePage.name,
					value
				);
				break;
			case 'family':
				await utils.clickAndTypeText(
					this.page,
					checkoutStepOnePage.family,
					value
				);
				break;
			case 'postalCode':
				await utils.clickAndTypeText(
					this.page,
					checkoutStepOnePage.postalCode,
					value
				);
				break;
		}
	}          
);

When(/^I click the login button$/, async function() {
	await utils.click(this.page, loginPage.loginButton);
});

Then('I should see {string} error message', 
async function(value) {
    let errorMessage = await utils.getText(this.page, loginPage.errorMessage);
    await expect(errorMessage).to.equal(value);
    
});

Then(/^I should see the Products page$/, async function() {
   let pageTitle = await utils.getText(this.page, productsPage.pageTitle);
   await expect(pageTitle).to.equal("Products");
});
