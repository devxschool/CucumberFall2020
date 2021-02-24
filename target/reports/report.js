$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Background.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "###Test setup - Test preconditons"
    },
    {
      "line": 3,
      "value": "##For Feature files which have 20 tests"
    },
    {
      "line": 4,
      "value": "##10 of them have the same precondinal steps"
    },
    {
      "line": 5,
      "value": "#10 have different ones."
    },
    {
      "line": 6,
      "value": "#create 2 feature file leverage background in one them"
    },
    {
      "line": 7,
      "value": "#and keep the other 10 as is"
    }
  ],
  "line": 9,
  "name": "Avoiding Repetition",
  "description": "",
  "id": "avoiding-repetition",
  "keyword": "Feature",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "comments": [
    {
      "line": 11,
      "value": "##We can put all repeating preconditonal steps here"
    },
    {
      "line": 12,
      "value": "##only one Background per file"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    }
  ],
  "location": "ParamStepDefs.user_should_be_navigated_to_HomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Integer Params - Buy functionality",
  "description": "",
  "id": "avoiding-repetition;integer-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User buys 20 \"Iphones\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should have 20 \"Iphones\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 10
    },
    {
      "val": "Iphones",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 17
    },
    {
      "val": "Iphones",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "comments": [
    {
      "line": 11,
      "value": "##We can put all repeating preconditonal steps here"
    },
    {
      "line": 12,
      "value": "##only one Background per file"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 14,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    }
  ],
  "location": "ParamStepDefs.user_should_be_navigated_to_HomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Char Params - Buy functionality",
  "description": "",
  "id": "avoiding-repetition;char-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User buys 20 \"Iphones\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User total should be $2000.55",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User credit standing should be \u0027A\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 10
    },
    {
      "val": "Iphones",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2000.55",
      "offset": 22
    }
  ],
  "location": "ParamStepDefs.userTotalShouldBe$(double)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 32
    }
  ],
  "location": "ParamStepDefs.userCreditStandingShouldBeA(char)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/BackgroundAndOutline.feature");
formatter.feature({
  "line": 1,
  "name": "Combine Scenario Outline and Background",
  "description": "",
  "id": "combine-scenario-outline-and-background",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    }
  ],
  "location": "ParamStepDefs.user_should_be_navigated_to_HomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Integer Params - Buy functionality",
  "description": "",
  "id": "combine-scenario-outline-and-background;integer-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User buys 20 \"Iphones\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User should have 20 \"Iphones\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 10
    },
    {
      "val": "Iphones",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 17
    },
    {
      "val": "Iphones",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/DataTables.feature");
formatter.feature({
  "line": 1,
  "name": "Test with data table",
  "description": "",
  "id": "test-with-data-table",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "No Data Table - Bad",
  "description": "",
  "id": "test-with-data-table;no-data-table---bad",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User creates the invoice with amount 200.00 and name \"Spoon\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User creates the invoice with amount 222.00 and name \"Iphone\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User creates the invoice with amount 100.00 and name \"Ipad\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User creates the invoice with amount 100.00 and name \"Bike\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User creates the invoice with amount 212.00 and name \"Bike\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User sends the above invoices",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should have 4222 in total invoices report",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200.00",
      "offset": 37
    },
    {
      "val": "Spoon",
      "offset": 54
    }
  ],
  "location": "ReportSteps.name1(double,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "222.00",
      "offset": 37
    },
    {
      "val": "Iphone",
      "offset": 54
    }
  ],
  "location": "ReportSteps.name1(double,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 37
    },
    {
      "val": "Ipad",
      "offset": 54
    }
  ],
  "location": "ReportSteps.name1(double,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100.00",
      "offset": 37
    },
    {
      "val": "Bike",
      "offset": 54
    }
  ],
  "location": "ReportSteps.name1(double,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "212.00",
      "offset": 37
    },
    {
      "val": "Bike",
      "offset": 54
    }
  ],
  "location": "ReportSteps.name1(double,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReportSteps.name2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "4222",
      "offset": 17
    }
  ],
  "location": "ReportSteps.name3(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Data Table - List\u003cObject\u003e right away. In this case List\u003cInvoice\u003e invoices",
  "description": "",
  "id": "test-with-data-table;data-table---list\u003cobject\u003e-right-away.-in-this-case-list\u003cinvoice\u003e-invoices",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "the following invoices are created object",
  "rows": [
    {
      "cells": [
        "invoiceAmount",
        "invoiceName"
      ],
      "line": 38
    },
    {
      "cells": [
        "200",
        "Spoon"
      ],
      "line": 39
    },
    {
      "cells": [
        "222",
        "Iphone"
      ],
      "line": 40
    },
    {
      "cells": [
        "100",
        "Ipad"
      ],
      "line": 41
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "User sends the above invoices",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User should have 522 in total invoices report",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportSteps.theFollowingInvoicesAreCreatedObject(Invoice\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ReportSteps.name2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "522",
      "offset": 17
    }
  ],
  "location": "ReportSteps.name3(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/First.feature");
formatter.feature({
  "line": 2,
  "name": "Amazon e-commerce Login",
  "description": "",
  "id": "amazon-e-commerce-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "amazon-e-commerce-login;login-with-valid-username-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User JohnDoe with password abc123 is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User JohnDoe with password abc123 logs in",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User JohnDoe should be navigated to HomePage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 30
    }
  ],
  "location": "FirstStepDef.user_JohnDoe_with_password_abc_is_registered(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 30
    }
  ],
  "location": "FirstStepDef.user_JohnDoe_with_password_abc_logs_in(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstStepDef.user_JohnDoe_should_be_navigated_to_HomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "##one big advantage of cucumber is that once a step is implemented it can be"
    },
    {
      "line": 11,
      "value": "#reused as many times as needed not only in one feature file but"
    },
    {
      "line": 12,
      "value": "#in any feature across this project."
    }
  ],
  "line": 13,
  "name": "Login with valid username and invalid password",
  "description": "",
  "id": "amazon-e-commerce-login;login-with-valid-username-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User JohnDoe with password abc123 is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User JohnDoe with password wrongPass logs in",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should be given login error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 30
    }
  ],
  "location": "FirstStepDef.user_JohnDoe_with_password_abc_is_registered(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstStepDef.userJohnDoeWithPasswordWrongPassLogsIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstStepDef.userShouldBeGivenLoginErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "Login with valid work email and weak password",
  "description": "",
  "id": "amazon-e-commerce-login;login-with-valid-work-email-and-weak-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "User tim@apple.com with password timceo is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User tim@apple.com with password timceo logs in",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User time@apple.com should be navigated to HomePage",
  "keyword": "Then "
});
formatter.match({
  "location": "FirstStepDef.userTimAppleComWithPasswordTimceoIsRegistered()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstStepDef.userTimAppleComWithPasswordTimceoLogsIn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FirstStepDef.userTimeAppleComShouldBeNavigatedToHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Login Gmail",
  "description": "",
  "id": "amazon-e-commerce-login;login-gmail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "User test@gmail.com with password somePss is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User test@gmail.com with password somePss logs in",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User test@gmail.com should be navigated to HomePage",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("features/ParamScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Login Scenarios Parameterized",
  "description": "",
  "id": "login-scenarios-parameterized",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "Login with params 2",
  "description": "",
  "id": "login-scenarios-parameterized;login-with-params-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    }
  ],
  "location": "ParamStepDefs.user_should_be_navigated_to_HomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Integer Params - Buy functionality",
  "description": "",
  "id": "login-scenarios-parameterized;integer-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@hello"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User buys 20 \"Iphones\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    },
    {
      "val": "ExtreamnelyHardPa$$",
      "offset": 40
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "johnDoe@gmail.com",
      "offset": 6
    }
  ],
  "location": "ParamStepDefs.user_should_be_navigated_to_HomePage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 10
    },
    {
      "val": "Iphones",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/ScenarioOutline.feature");
formatter.feature({
  "line": 1,
  "name": "AppleStore with Scenario Outlines",
  "description": "",
  "id": "applestore-with-scenario-outlines",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Apple Store has \u003camount\u003e \"\u003citem\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User buys \u003cbuyAmount\u003e \"\u003citem\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should have \u003cbuyAmount\u003e \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Applse Store should have \u003ccurrentAppStoreAmount\u003e \"\u003citem\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;",
  "rows": [
    {
      "cells": [
        "amount",
        "item",
        "buyAmount",
        "currentAppStoreAmount"
      ],
      "line": 11,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;1"
    },
    {
      "cells": [
        "100",
        "Iphone",
        "10",
        "90"
      ],
      "line": 12,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;2"
    },
    {
      "cells": [
        "50",
        "Ipad",
        "5",
        "45"
      ],
      "line": 13,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;3"
    },
    {
      "cells": [
        "80",
        "Watch",
        "10",
        "70"
      ],
      "line": 14,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;4"
    },
    {
      "cells": [
        "11",
        "Mac",
        "10",
        "1"
      ],
      "line": 15,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Apple Store has 100 \"Iphone\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User buys 10 \"Iphone\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should have 10 \"Iphone\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Applse Store should have 90 \"Iphone\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    },
    {
      "val": "Iphone",
      "offset": 21
    }
  ],
  "location": "AppleStoreSteps.appleStoreHas(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    },
    {
      "val": "Iphone",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "Iphone",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 25
    },
    {
      "val": "Iphone",
      "offset": 29
    }
  ],
  "location": "AppleStoreSteps.applseStoreShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Apple Store has 50 \"Ipad\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User buys 5 \"Ipad\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should have 5 \"Ipad\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Applse Store should have 45 \"Ipad\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    },
    {
      "val": "Ipad",
      "offset": 20
    }
  ],
  "location": "AppleStoreSteps.appleStoreHas(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "Ipad",
      "offset": 13
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 17
    },
    {
      "val": "Ipad",
      "offset": 20
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 25
    },
    {
      "val": "Ipad",
      "offset": 29
    }
  ],
  "location": "AppleStoreSteps.applseStoreShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Apple Store has 80 \"Watch\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User buys 10 \"Watch\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should have 10 \"Watch\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Applse Store should have 70 \"Watch\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 16
    },
    {
      "val": "Watch",
      "offset": 20
    }
  ],
  "location": "AppleStoreSteps.appleStoreHas(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    },
    {
      "val": "Watch",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "Watch",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 25
    },
    {
      "val": "Watch",
      "offset": 29
    }
  ],
  "location": "AppleStoreSteps.applseStoreShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Apple Store has 11 \"Mac\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User buys 10 \"Mac\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should have 10 \"Mac\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Applse Store should have 1 \"Mac\"",
  "matchedColumns": [
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 16
    },
    {
      "val": "Mac",
      "offset": 20
    }
  ],
  "location": "AppleStoreSteps.appleStoreHas(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    },
    {
      "val": "Mac",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 17
    },
    {
      "val": "Mac",
      "offset": 21
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 25
    },
    {
      "val": "Mac",
      "offset": 28
    }
  ],
  "location": "AppleStoreSteps.applseStoreShouldHave(int,String)"
});
formatter.result({
  "status": "skipped"
});
});