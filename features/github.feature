Feature: Navigate GitHub 

    Background: Access homepage
        Given I access homepage

    Scenario: Successfully access the homepage
        Then I see "Let’s build from here"

    Scenario: Successfully access the actions page
        And I navigated to the primary menu "Product"
        When I click on the "Actions" menu
        Then I see "GitHub Actions"