Feature: Test with data table


  @smoke
  Scenario: No Data Table - Bad
    Given User creates the invoice with amount 200.00 and name "Spoon"
    And User creates the invoice with amount 222.00 and name "Iphone"
    And User creates the invoice with amount 100.00 and name "Ipad"
    And User creates the invoice with amount 100.00 and name "Bike"
    And User creates the invoice with amount 212.00 and name "Bike"
    When User sends the above invoices
    Then User should have 4222 in total invoices report

##List<List<String>>
  ##2,1
  Scenario: Data Table - DataTable -> List<Map<String, String>>
    Given the following invoices are created
      | amount | name   |
      | 200    | Spoon  |
      | 222    | Iphone |
      | 100    | Ipad   |
    When User sends the above invoices
    Then User should have 522 in total invoices report


  Scenario: Data Table - List<Map<String, String>> right away
    Given the following invoices are created map
      | amount | name   |
      | 200    | Spoon  |
      | 222    | Iphone |
      | 100    | Ipad   |
    When User sends the above invoices
    Then User should have 522 in total invoices report

 @smoke
  Scenario: Data Table - List<Object> right away. In this case List<Invoice> invoices
    Given the following invoices are created object
      | invoiceAmount | invoiceName |
      | 200           | Spoon       |
      | 222           | Iphone      |
      | 100           | Ipad        |
    When User sends the above invoices
    Then User should have 522 in total invoices report