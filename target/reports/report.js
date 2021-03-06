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
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 219665,
  "status": "passed"
});
formatter.before({
  "duration": 48315,
  "status": "passed"
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
  "duration": 178671557,
  "status": "passed"
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
  "duration": 118781,
  "status": "passed"
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
  "duration": 94321,
  "status": "passed"
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
  "duration": 605208,
  "status": "passed"
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
  "duration": 149218,
  "status": "passed"
});
formatter.after({
  "duration": 89769,
  "status": "passed"
});
formatter.before({
  "duration": 55116,
  "status": "passed"
});
formatter.before({
  "duration": 32945,
  "status": "passed"
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
  "duration": 129981,
  "status": "passed"
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
  "duration": 95884,
  "status": "passed"
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
  "duration": 90881,
  "status": "passed"
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
  "duration": 251074,
  "status": "passed"
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
  "duration": 356699,
  "status": "passed"
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
  "duration": 637199,
  "status": "passed"
});
formatter.after({
  "duration": 65284,
  "status": "passed"
});
formatter.uri("features/BackgroundAndOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Combine Scenario Outline and Background",
  "description": "",
  "id": "combine-scenario-outline-and-background",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 69478,
  "status": "passed"
});
formatter.before({
  "duration": 37472,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 8,
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
  "duration": 213901,
  "status": "passed"
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
  "duration": 63281,
  "status": "passed"
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
  "duration": 132020,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Integer Params - Buy functionality",
  "description": "",
  "id": "combine-scenario-outline-and-background;integer-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "User buys 20 \"Iphones\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
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
  "duration": 184195,
  "status": "passed"
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
  "duration": 212387,
  "status": "passed"
});
formatter.after({
  "duration": 52800,
  "status": "passed"
});
formatter.uri("features/DataTables.feature");
formatter.feature({
  "line": 2,
  "name": "Test with data table",
  "description": "",
  "id": "test-with-data-table",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 59716,
  "status": "passed"
});
formatter.before({
  "duration": 34858,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "No Data Table - Bad",
  "description": "",
  "id": "test-with-data-table;no-data-table---bad",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User creates the invoice with amount 200.00 and name \"Spoon\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User creates the invoice with amount 222.00 and name \"Iphone\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User creates the invoice with amount 100.00 and name \"Ipad\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User creates the invoice with amount 100.00 and name \"Bike\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User creates the invoice with amount 212.00 and name \"Bike\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User sends the above invoices",
  "keyword": "When "
});
formatter.step({
  "line": 13,
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
  "duration": 372679,
  "status": "passed"
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
  "duration": 197866,
  "status": "passed"
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
  "duration": 209974,
  "status": "passed"
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
  "duration": 252840,
  "status": "passed"
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
  "duration": 92302,
  "status": "passed"
});
formatter.match({
  "location": "ReportSteps.name2()"
});
formatter.result({
  "duration": 339066,
  "status": "passed"
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
  "duration": 1788987,
  "error_message": "java.lang.AssertionError: expected:\u003c4222.0\u003e but was:\u003c834.0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:553)\n\tat org.junit.Assert.assertEquals(Assert.java:683)\n\tat step_defs.ReportSteps.name3(ReportSteps.java:49)\n\tat ✽.Then User should have 4222 in total invoices report(features/DataTables.feature:13)\n",
  "status": "failed"
});
formatter.after({
  "duration": 216239,
  "status": "passed"
});
formatter.before({
  "duration": 162049,
  "status": "passed"
});
formatter.before({
  "duration": 86834,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Data Table - List\u003cObject\u003e right away. In this case List\u003cInvoice\u003e invoices",
  "description": "",
  "id": "test-with-data-table;data-table---list\u003cobject\u003e-right-away.-in-this-case-list\u003cinvoice\u003e-invoices",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "the following invoices are created object",
  "rows": [
    {
      "cells": [
        "invoiceAmount",
        "invoiceName"
      ],
      "line": 39
    },
    {
      "cells": [
        "200",
        "Spoon"
      ],
      "line": 40
    },
    {
      "cells": [
        "222",
        "Iphone"
      ],
      "line": 41
    },
    {
      "cells": [
        "100",
        "Ipad"
      ],
      "line": 42
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "User sends the above invoices",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "User should have 522 in total invoices report",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportSteps.theFollowingInvoicesAreCreatedObject(Invoice\u003e)"
});
formatter.result({
  "duration": 18795220,
  "status": "passed"
});
formatter.match({
  "location": "ReportSteps.name2()"
});
formatter.result({
  "duration": 118880,
  "status": "passed"
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
  "duration": 289803,
  "status": "passed"
});
formatter.after({
  "duration": 109651,
  "status": "passed"
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
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 213327,
  "status": "passed"
});
formatter.before({
  "duration": 51003,
  "status": "passed"
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
  "duration": 355803,
  "status": "passed"
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
  "duration": 269065,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.user_JohnDoe_should_be_navigated_to_HomePage()"
});
formatter.result({
  "duration": 96555,
  "status": "passed"
});
formatter.after({
  "duration": 86226,
  "status": "passed"
});
formatter.before({
  "duration": 352061,
  "status": "passed"
});
formatter.before({
  "duration": 134789,
  "status": "passed"
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
  "duration": 610237,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userJohnDoeWithPasswordWrongPassLogsIn()"
});
formatter.result({
  "duration": 98112,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userShouldBeGivenLoginErrorMessage()"
});
formatter.result({
  "duration": 65025,
  "status": "passed"
});
formatter.after({
  "duration": 55251,
  "status": "passed"
});
formatter.before({
  "duration": 59690,
  "status": "passed"
});
formatter.before({
  "duration": 46667,
  "status": "passed"
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
  "duration": 741976,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userTimAppleComWithPasswordTimceoLogsIn()"
});
formatter.result({
  "duration": 87579,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userTimeAppleComShouldBeNavigatedToHomePage()"
});
formatter.result({
  "duration": 87776,
  "status": "passed"
});
formatter.after({
  "duration": 51762,
  "status": "passed"
});
formatter.before({
  "duration": 56549,
  "status": "passed"
});
formatter.before({
  "duration": 45917,
  "status": "passed"
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
formatter.after({
  "duration": 86816,
  "status": "passed"
});
formatter.uri("features/ParamScenarios.feature");
formatter.feature({
  "line": 2,
  "name": "Login Scenarios Parameterized",
  "description": "",
  "id": "login-scenarios-parameterized",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 52299,
  "status": "passed"
});
formatter.before({
  "duration": 30541,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login with params 2",
  "description": "",
  "id": "login-scenarios-parameterized;login-with-params-2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 13,
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
  "duration": 144905,
  "status": "passed"
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
  "duration": 82728,
  "status": "passed"
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
  "duration": 133599,
  "status": "passed"
});
formatter.after({
  "duration": 67369,
  "status": "passed"
});
formatter.before({
  "duration": 109553,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Integer Params - Buy functionality",
  "description": "",
  "id": "login-scenarios-parameterized;integer-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@hello"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 26,
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
  "duration": 313859,
  "status": "passed"
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
  "duration": 119661,
  "status": "passed"
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
  "duration": 111272,
  "status": "passed"
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
  "duration": 370782,
  "status": "passed"
});
formatter.after({
  "duration": 95349,
  "status": "passed"
});
formatter.uri("features/ScenarioOutline.feature");
formatter.feature({
  "line": 2,
  "name": "AppleStore with Scenario Outlines",
  "description": "",
  "id": "applestore-with-scenario-outlines",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Apple Store has \u003camount\u003e \"\u003citem\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User buys \u003cbuyAmount\u003e \"\u003citem\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should have \u003cbuyAmount\u003e \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Applse Store should have \u003ccurrentAppStoreAmount\u003e \"\u003citem\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
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
      "line": 12,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;1"
    },
    {
      "cells": [
        "100",
        "Iphone",
        "10",
        "90"
      ],
      "line": 13,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;2"
    },
    {
      "cells": [
        "50",
        "Ipad",
        "5",
        "45"
      ],
      "line": 14,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;3"
    },
    {
      "cells": [
        "80",
        "Watch",
        "10",
        "70"
      ],
      "line": 15,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;4"
    },
    {
      "cells": [
        "11",
        "Mac",
        "10",
        "1"
      ],
      "line": 16,
      "id": "applestore-with-scenario-outlines;apple-store-buy;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 313570,
  "status": "passed"
});
formatter.before({
  "duration": 119897,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Apple Store has 100 \"Iphone\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User buys 10 \"Iphone\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should have 10 \"Iphone\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
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
  "duration": 644719,
  "status": "passed"
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
  "duration": 421889,
  "status": "passed"
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
  "duration": 358433,
  "status": "passed"
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
  "duration": 518466,
  "status": "passed"
});
formatter.after({
  "duration": 187321,
  "status": "passed"
});
formatter.before({
  "duration": 104584,
  "status": "passed"
});
formatter.before({
  "duration": 69416,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Apple Store has 50 \"Ipad\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User buys 5 \"Ipad\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should have 5 \"Ipad\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
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
  "duration": 382930,
  "status": "passed"
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
  "duration": 1066676,
  "status": "passed"
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
  "duration": 400804,
  "status": "passed"
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
  "duration": 216764,
  "status": "passed"
});
formatter.after({
  "duration": 601867,
  "status": "passed"
});
formatter.before({
  "duration": 76593,
  "status": "passed"
});
formatter.before({
  "duration": 30817,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Apple Store has 80 \"Watch\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User buys 10 \"Watch\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should have 10 \"Watch\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
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
  "duration": 1146923,
  "status": "passed"
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
  "duration": 594946,
  "status": "passed"
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
  "duration": 1085893,
  "status": "passed"
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
  "duration": 775285,
  "status": "passed"
});
formatter.after({
  "duration": 102457,
  "status": "passed"
});
formatter.before({
  "duration": 86470,
  "status": "passed"
});
formatter.before({
  "duration": 171363,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "apple store buy",
  "description": "",
  "id": "applestore-with-scenario-outlines;apple-store-buy;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Apple Store has 11 \"Mac\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User buys 10 \"Mac\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should have 10 \"Mac\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
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
  "duration": 264793,
  "status": "passed"
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
  "duration": 282059,
  "status": "passed"
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
  "duration": 145710,
  "status": "passed"
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
  "duration": 130191,
  "status": "passed"
});
formatter.after({
  "duration": 44503,
  "status": "passed"
});
});