Feature: Login GitHub 

    Background: Access login page
        Given I access login page

    Scenario: Successfully access the login page
        Then I see "Sign in to GitHub"
    @login
    Scenario: Performing a login attempt with incorrect data
        And I fill in username with "emailincorreto@gmail.com" and password with "teste123"
        When I click Sign in
        Then I see "Incorrect username or password."