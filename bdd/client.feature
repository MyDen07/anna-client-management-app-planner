Feature: Client management
  As a project coordinator
  I want to create client records
  So that I can schedule meetings accurately

  Scenario: Creating a Client
    Given I am on the "Clients" page
    When I enter "Anna Smith" in Name and "anna@annaarch.com" in Email
    And I click "Save Client"
    Then I should see the client listed with a new ID