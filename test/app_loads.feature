Feature: App load
  As a user
  I want to load the app
  So that I can experience great joy

  Scenario: Loading the app successfully
    Given I load the app
    Then I should see a "title" equal to "ES for home"
    And I should see a "content" containing "Bacon ipsum dolor amet"
