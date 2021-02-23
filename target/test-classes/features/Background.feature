###Test setup - Test preconditons

  ##For Feature files which have 20 tests
  ##10 of them have the same precondinal steps
  #10 have different ones.
  #create 2 feature file leverage background in one them
  #and keep the other 10 as is
@smoke
Feature: Avoiding Repetition

    ##We can put all repeating preconditonal steps here
    ##only one Background per file
  Background:
    Given User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" is registered
    When User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" logs in
    And User "johnDoe@gmail.com" should be navigated to HomePage

  @login
  Scenario: Integer Params - Buy functionality
    And User buys 20 "Iphones"
    Then User should have 20 "Iphones"

  @ignore
  Scenario: Double Params - Buy functionality
    When User buys 20 "Iphones"
    Then User total should be $2000.55

  Scenario: Char Params - Buy functionality
    When User buys 20 "Iphones"
    Then User total should be $2000.55
    And User credit standing should be 'A'