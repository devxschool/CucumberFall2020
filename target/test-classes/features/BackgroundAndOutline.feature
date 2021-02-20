Feature: Combine Scenario Outline and Background


  Background:
    Given User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" is registered
    When User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" logs in
    And User "johnDoe@gmail.com" should be navigated to HomePage


  Scenario Outline: apple store buy
    Given Apple Store has <amount> "<item>"
    When User buys <buyAmount> "<item>"
    Then User should have <buyAmount> "<item>"
    And Applse Store should have <currentAppStoreAmount> "<item>"

    Examples:
      | amount | item   | buyAmount | currentAppStoreAmount |
      | 100    | Iphone | 10        | 90                    |
      | 50     | Ipad   | 5         | 45                    |
      | 80     | Watch  | 10        | 70                    |
      | 11     | Mac    | 10        | 1                     |


  Scenario: Integer Params - Buy functionality
    And User buys 20 "Iphones"
    Then User should have 20 "Iphones"