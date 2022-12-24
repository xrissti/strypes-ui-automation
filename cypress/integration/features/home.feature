Feature: Main page

@automated
Scenario: Navigate to Main page
    Given navigate to the "Main" page
    Then the "Main" page should be displayed correctly
    And the chatbot is present

@automated
Scenario Outline: Verify redirection from About drop-down menu
    Given navigate to the "Main" page
    When click 'About' drop-down button
    And select the '<text>' menu option from 'About' drop-down menu
    Then the '<text>' page should be displayed correctly
Examples:
        |text           |
        |About Strypes  |
        |Our brands     |
        |Our promises   |
        |Our leadership |

