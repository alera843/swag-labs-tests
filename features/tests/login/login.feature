Feature: User Login

Feature Description: The users are able to login to the site with valid credentials. 
And if there is a problem with the credentials, they should see helpful error messages.

Scenario: Login with valid credentials.

Given I have opened the login page
When I type "standard_user" value in the "username" field
And I type "secret_sauce" value in the "password" field
And I click the login button
Then I should see the Products page


Scenario: User cannot login with wrong username

Given I have opened the login page
When I type "wrong username" value in the "username" field
And I type "secret_sauce" value in the "password" field
And I click the login button
Then I should see "Epic sadface: Username and password do not match any user in this service" error message


Scenario: User cannot login with wrong password

Given I have opened the login page
When I type "standard_user" value in the "username" field
And I type "public_sauce" value in the "password" field
And I click the login button
Then I should see "Epic sadface: Username and password do not match any user in this service" error message


Scenario: User cannot login without typing a username

Given I have opened the login page
When I type "secret_sauce" value in the "password" field
And I click the login button
Then I should see "Epic sadface: Username is required" error message


Scenario: User cannot login without typing a password

Given I have opened the login page
When I type "standard_user" value in the "username" field
And I click the login button
Then I should see "Epic sadface: Password is required" error message


Scenario: Error message is displayed when the user is locked out

Given I have opened the login page
When I type "locked_out_user" value in the "username" field
And I type "secret_sauce" value in the "password" field
And I click the login button
Then I should see "Epic sadface: Sorry, this user has been locked out." error message
