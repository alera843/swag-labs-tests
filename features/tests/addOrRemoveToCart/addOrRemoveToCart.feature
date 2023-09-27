Feature: Add to cart/ Remove from cart

Feature Description: The users are able to add or remove products to/from cart.

Scenario: Add product to card and verify there is a cart badge indication for added product.

Given I am logged in with "standard_user" and I am on Products page
When I click "bikeLightAddToCartButton" on products page
Then I should see that the button text changed to Remove
And I should see badge indication on the cart icon showing 1 product has been added


Scenario: Remove product from cart on Products page.

Given I am logged in with "standard_user" and I am on Products page
When I click "bikeLightAddToCartButton" on products page
And I click "removeButtonBikeLight" on products page
Then I should see that the "bikeLightAddToCartButton" button text is Add to cart
# And There is no badge indication on the cart icon


Scenario: Remove product from cart on Cart page

Given I am logged in with "standard_user" and I am on Products page
When I click "fleeceJacketAddToCartButton" on products page
And I go to check my cart
And I "removeFleeceJacket" product from my cart
Then the product should be removed

@focus
Scenario: Add product to cart from Inventory Item (Detailed product page)

Given I am logged in with "standard_user" and I am on Products page
When I open the inventory item page for "BackpackItemLink" product
And I click "" to add product to cart
And I go to check my cart
Then I should see "" product added to my cart
