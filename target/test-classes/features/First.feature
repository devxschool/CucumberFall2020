Feature: Amazon e-commerce Login

  Scenario: Login with valid username and valid password
    Given User JohnDoe with password abc123 is registered
    When User JohnDoe with password abc123 logs in
    Then User JohnDoe should be navigated to HomePage
    Then User JohnDoe should be navigated to HomePage
    Then User JohnDoe should be navigated to HomePage




