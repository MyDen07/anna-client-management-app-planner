Feature: Client meeting scheduling
  As a project coordinator
  I want to record client meetings
  So that project touchpoints are tracked

  Scenario: Client Meeting Schedule
    Given I am on the "Meetings" page
    And at least one client exists
    When I select the client, enter Title "Design Review"
    And I choose a Date and Time and Mode "Online"
    And I click "Create Meeting"
    Then I should see a new meeting with status "Scheduled"

  Scenario: Cancel a meeting
    Given a meeting is "Scheduled"
    When I click "Cancel" for that meeting
    Then the meeting status becomes "Cancelled"