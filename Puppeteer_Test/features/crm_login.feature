Feature: Login as a user
 
    # To check if the user is logged in successfully
	
    Scenario: Verify user is able to login to the site
        Given The browser is open
        When Open the site
        And I login to the application

    Scenario: Verify user is Created
        When I have logged in
        And I can create user
        Then View Users

    Scenario: Verify User list is displayed
        When I am logged in
        Then View Users list