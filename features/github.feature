Feature: Navigate GitHub 

    Background: Access homepage
        Given I access homepage

    Scenario: Successfully access the homepage
        Then I see "Let’s build from here"

    Scenario: Successfully access the actions page
        And I navigated to the primary menu "Product"
        When I click on the "Actions" menu
        Then I see "GitHub Actions"

    Scenario: Successfully access the packages page
        And I navigated to the primary menu "Product"
        When I click on the "Packages" menu
        Then I see "GitHub oie Packages"

    Scenario: Successfully access the security page
        And I navigated to the primary menu "Product"
        When I click on the "Security" menu
        Then I see "Secure at every step"

    Scenario: Successfully access the codespaces page
        And I navigated to the primary menu "Product"
        When I click on the "Codespaces" menu
        Then I see "Start coding instantly"

     Scenario: Successfully access the copilot page
        And I navigated to the primary menu "Product"
        When I click on the "Copilot" menu
        Then I see "Your AI pair programmer"

     Scenario: Successfully access the codereview page
        And I navigated to the primary menu "Product"
        When I click on the "Code review" menu
        Then I see "Write better code"

     Scenario: Successfully access the issues page
        And I navigated to the primary menu "Product"
        When I click on the "Issues" menu
        Then I see "Project planning"

     Scenario: Successfully access the discussions page
        And I navigated to the primary menu "Product"
        When I click on the "Discussions" menu
        Then I see "The home for developer communities"