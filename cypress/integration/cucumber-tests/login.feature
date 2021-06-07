Feature: Login to application

As an invalid user
I cannot login to application
As a valid user
I want to login to application


Scenario: Invalid login
Given I open the login page
And I want to wait for 3000 milliseconds
And I see "Zero - Log in" in the title
And I see "/login" in the URL
When I fill username with "invalid username"
And I fill password with "invalid password"
And I click on submit button
Then I should see error message

Scenario: Valid login
Given I open the login page
When I fill username with "username"
And I fill password with "password"
And I click on submit button
Then I should see home page