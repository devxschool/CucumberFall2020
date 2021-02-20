Feature: Amazon e-commerce Login

  Scenario: Login with valid username and valid password
    Given User JohnDoe with password abc123 is registered
    When User JohnDoe with password abc123 logs in
    Then User JohnDoe should be navigated to HomePage



    ##one big advantage of cucumber is that once a step is implemented it can be
  #reused as many times as needed not only in one feature file but
  #in any feature across this project.
  Scenario: Login with valid username and invalid password
    Given User JohnDoe with password abc123 is registered
    When User JohnDoe with password wrongPass logs in
    Then User should be given login error message



  Scenario: Login with valid work email and weak password
    Given User tim@apple.com with password timceo is registered
    When User tim@apple.com with password timceo logs in
    Then User time@apple.com should be navigated to HomePage


  Scenario: Login Gmail
    Given User test@gmail.com with password somePss is registered
    When User test@gmail.com with password somePss logs in
    Then User test@gmail.com should be navigated to HomePage






