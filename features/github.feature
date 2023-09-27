Feature: Navigate GitHub 

    Background: Access homepage
        Given I access homepage

    Scenario: Successfully access the homepage
        Then I see "Let’s build from here"

    Scenario: Successfully access the actions page
        And I navigate to the Product menu
        When I click on the Actions menu
        Then I see "GitHub Actions"