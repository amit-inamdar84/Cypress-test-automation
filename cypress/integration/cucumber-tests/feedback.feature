Feature: Send feedback


    As a customer I can 
    send my feedback via form

    Scenario: Submit feedback form
    Given I open feedback form
    When I fill feedback form with "Name" "test@email.com" "Subject" "Some comments"
    And I click on send button
    Then  I see "/sendFeedback.html" in the URL