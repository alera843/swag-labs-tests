const expect = require('chai').expect;

module.exports = {
    
    click: async function (page, selector) {
        try {
          await page.waitForSelector(selector);
          await page.click(selector, { delay: 30 });
        } catch (error) {
          throw new Error(`Could not click on selector: ${selector}`);
        }
      },

      clickAndTypeText: async function (page, selector, text) {
        try {
          await page.waitForSelector(selector);
          await page.click(selector);
          await page.type(selector, text, { delay: 30 });
        } catch (error) {
          throw new Error(`Could not type into selector: ${selector}`);
        }
      },

      pressKey: async function (page, key) {
        try {
          await page.keyboard.press(key, { delay: 100});
        } catch (error) {
          throw new Error(`Couldn't press key ${key} on the keyboard`);
        }
      },

      getText: async function (page, selector) {
        try {
          await page.waitForTimeout(2000);
          await page.waitForSelector(selector, {timeout: 400});
          return await page.$eval(selector, (element) => element.textContent);
        } catch (error) {
          console.log("getText error", error)
          throw new Error(`Could not get text from selector: ${selector}`, error);
        }
      },

      getElement: async function(page, selector) {
        const element = await page.$(selector);
        return element;
      },

      clickByText: async function (page, selector) {
        try {
          const [objectToClick] = await page.$x(
            `//*[contains(text(), '${selector}')]`
          );
          if (objectToClick) {
            await objectToClick.click();
          }
        } catch (error) {
          throw new Error(`Could not click on selector: ${selector}`);
        }
      },

      

    

}