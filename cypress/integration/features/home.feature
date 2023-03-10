Feature: Home page

Background: 
    Given navigate to the "Home" page

@automated
Scenario: Verify the Home page is loaded
    Then the "Home" page should be displayed

@automated
Scenario: The logo and chatbot are present on the Home page
    Then the Strypes logo is present
    And the chatbot is present

@automated
Scenario Outline: Verify redirection from About drop-down menu
    When click 'About' drop-down button
    And select the '<text>' menu option from 'About' drop-down menu
    Then the '<text>' page should be displayed
Examples:
        |text           |
        |About Strypes  |
        |Our brands     |
        |Our promises   |
        |Our leadership |

@automated
Scenario: The Contact page is opened from the section on the Home page
    When click 'Get in touch' button in 'Do you want to learn more?' section
    Then the 'Contact' page should be displayed

@automated
Scenario: The user is returned to the top of the Home page
    When scroll to the bottom of the page
    And click 'Scroll to Top' icon
    Then the top right menu should be displayed

@automated
Scenario: Find a particular slide Nearsurance
    Then find the right slide

@automated
Scenario Outline: Verify whether on clicking each Learn more button of the slideshow, the corresponding page is displayed.
    When click 'Learn more' button on '<name>' slide heading
    Then the '<name>' page should be displayed
Examples:
        |name                     | url        |
        |Building Smart Solutions | Services   |
        |Nearsurance              | Nearsurance|
#        |Start your career in IT  | Blog       |

@automated
Scenario Outline: Verify texts in each slide
    Then the slide '<name>' contains description '<text>'
Examples:
        |name                     | text                                                     |
        |Building Smart Solutions | We provide end-to-end software solutions                 |
        |Nearsurance              | Our unique outsourcing model that brings business success|
        |Start your career in IT  | Do you have some interest and knowledge in IT?           |
