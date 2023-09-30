Feature: Checkout proccess

Feature Description: When I add something to my cart I want to be able to purchase it going through the checkout process.

@focus
Scenario: Complete successfully the checkout process

Given I am logged in with "standard_user" and I am on Products page
And I click "boltTshirtAddToCartButton" to add product to cart and go to my cart
When I click the checkout button on the cart page
And I type "Jack" value in the "name" field
And I type "Sparrow" value in the "family" field
And I type "4003" value in the "postalCode" field
And I click the continue button on the checkout step one page
And I click the checkout button on the checkout step two page
Then I should be on the checkout complete page
And I should see the message for successful order