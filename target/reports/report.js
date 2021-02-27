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
  "duration": 1740507,
  "status": "passed"
});
formatter.before({
  "duration": 1328741,
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
  "duration": 8982430,
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
  "duration": 180129,
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
  "duration": 203173,
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
  "duration": 209211,
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
  "duration": 393984,
  "status": "passed"
});
formatter.after({
  "duration": 8522882,
  "status": "passed"
});
formatter.before({
  "duration": 17573201,
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
  "duration": 824356,
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
  "duration": 3409503,
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
  "duration": 54092,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Double Params - Buy functionality",
  "description": "",
  "id": "avoiding-repetition;double-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@ignore"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User buys 20 \"Iphones\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User total should be $2000.55",
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
  "duration": 175559,
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
  "duration": 162520,
  "status": "passed"
});
formatter.after({
  "duration": 55749,
  "status": "passed"
});
formatter.before({
  "duration": 92484,
  "status": "passed"
});
formatter.before({
  "duration": 27188,
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
  "duration": 228123,
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
  "duration": 74565,
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
  "duration": 80145,
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
  "duration": 137940,
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
  "duration": 118106,
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
  "duration": 178014,
  "status": "passed"
});
formatter.after({
  "duration": 30623,
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
formatter.scenarioOutline({
  "line": 11,
  "name": "apple store buy",
  "description": "",
  "id": "combine-scenario-outline-and-background;apple-store-buy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Apple Store has \u003camount\u003e \"\u003citem\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User buys \u003cbuyAmount\u003e \"\u003citem\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should have \u003cbuyAmount\u003e \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Applse Store should have \u003ccurrentAppStoreAmount\u003e \"\u003citem\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "combine-scenario-outline-and-background;apple-store-buy;",
  "rows": [
    {
      "cells": [
        "amount",
        "item",
        "buyAmount",
        "currentAppStoreAmount"
      ],
      "line": 18,
      "id": "combine-scenario-outline-and-background;apple-store-buy;;1"
    },
    {
      "cells": [
        "100",
        "Iphone",
        "10",
        "90"
      ],
      "line": 19,
      "id": "combine-scenario-outline-and-background;apple-store-buy;;2"
    },
    {
      "cells": [
        "50",
        "Ipad",
        "5",
        "45"
      ],
      "line": 20,
      "id": "combine-scenario-outline-and-background;apple-store-buy;;3"
    },
    {
      "cells": [
        "80",
        "Watch",
        "10",
        "70"
      ],
      "line": 21,
      "id": "combine-scenario-outline-and-background;apple-store-buy;;4"
    },
    {
      "cells": [
        "11",
        "Mac",
        "10",
        "1"
      ],
      "line": 22,
      "id": "combine-scenario-outline-and-background;apple-store-buy;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 47394,
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
  "duration": 107054,
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
  "duration": 61361,
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
  "duration": 162911,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "apple store buy",
  "description": "",
  "id": "combine-scenario-outline-and-background;apple-store-buy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Apple Store has 100 \"Iphone\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User buys 10 \"Iphone\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should have 10 \"Iphone\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
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
  "duration": 337676,
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
  "duration": 125474,
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
  "duration": 119444,
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
  "duration": 119182,
  "status": "passed"
});
formatter.after({
  "duration": 36643,
  "status": "passed"
});
formatter.before({
  "duration": 1219851,
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
  "duration": 235878,
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
  "duration": 186807,
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
  "duration": 79471,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "apple store buy",
  "description": "",
  "id": "combine-scenario-outline-and-background;apple-store-buy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Apple Store has 50 \"Ipad\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User buys 5 \"Ipad\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should have 5 \"Ipad\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
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
  "duration": 187336,
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
  "duration": 380050,
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
  "duration": 196797,
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
  "duration": 14867116,
  "status": "passed"
});
formatter.after({
  "duration": 4172118,
  "status": "passed"
});
formatter.before({
  "duration": 198466,
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
  "duration": 196407,
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
  "duration": 112526,
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
  "duration": 80415,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "apple store buy",
  "description": "",
  "id": "combine-scenario-outline-and-background;apple-store-buy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Apple Store has 80 \"Watch\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User buys 10 \"Watch\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should have 10 \"Watch\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
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
  "duration": 470874,
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
  "duration": 539950,
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
  "duration": 120150,
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
  "duration": 92318,
  "status": "passed"
});
formatter.after({
  "duration": 39161,
  "status": "passed"
});
formatter.before({
  "duration": 652586,
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
  "duration": 485006,
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
  "duration": 59392,
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
  "duration": 41959,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "apple store buy",
  "description": "",
  "id": "combine-scenario-outline-and-background;apple-store-buy;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Apple Store has 11 \"Mac\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User buys 10 \"Mac\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User should have 10 \"Mac\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
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
  "duration": 156153,
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
  "duration": 374024,
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
  "duration": 123421,
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
  "duration": 107307,
  "status": "passed"
});
formatter.after({
  "duration": 24953,
  "status": "passed"
});
formatter.before({
  "duration": 35920,
  "status": "passed"
});
formatter.before({
  "duration": 16537,
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
  "duration": 95371,
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
  "duration": 48286,
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
  "duration": 36134,
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
  "duration": 643978,
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
  "duration": 115019,
  "status": "passed"
});
formatter.after({
  "duration": 24369,
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
  "duration": 380626,
  "status": "passed"
});
formatter.before({
  "duration": 128924,
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
  "duration": 438272,
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
  "duration": 170311,
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
  "duration": 282195,
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
  "duration": 148398,
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
  "duration": 166944,
  "status": "passed"
});
formatter.match({
  "location": "ReportSteps.name2()"
});
formatter.result({
  "duration": 24408,
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
  "duration": 420350,
  "error_message": "java.lang.AssertionError: expected:\u003c4222.0\u003e but was:\u003c834.0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:553)\n\tat org.junit.Assert.assertEquals(Assert.java:683)\n\tat step_defs.ReportSteps.name3(ReportSteps.java:49)\n\tat ✽.Then User should have 4222 in total invoices report(features/DataTables.feature:13)\n",
  "status": "failed"
});
formatter.after({
  "duration": 33169,
  "status": "passed"
});
formatter.before({
  "duration": 61583,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "##List\u003cList\u003cString\u003e\u003e"
    },
    {
      "line": 16,
      "value": "##2,1"
    }
  ],
  "line": 17,
  "name": "Data Table - DataTable -\u003e List\u003cMap\u003cString, String\u003e\u003e",
  "description": "",
  "id": "test-with-data-table;data-table---datatable--\u003e-list\u003cmap\u003cstring,-string\u003e\u003e",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the following invoices are created",
  "rows": [
    {
      "cells": [
        "amount",
        "name"
      ],
      "line": 19
    },
    {
      "cells": [
        "200",
        "Spoon"
      ],
      "line": 20
    },
    {
      "cells": [
        "222",
        "Iphone"
      ],
      "line": 21
    },
    {
      "cells": [
        "100",
        "Ipad"
      ],
      "line": 22
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User sends the above invoices",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User should have 522 in total invoices report",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportSteps.theFollowingInvoicesAreCreated(DataTable)"
});
formatter.result({
  "duration": 29943504,
  "status": "passed"
});
formatter.match({
  "location": "ReportSteps.name2()"
});
formatter.result({
  "duration": 32364,
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
  "duration": 114552,
  "status": "passed"
});
formatter.after({
  "duration": 33361,
  "status": "passed"
});
formatter.before({
  "duration": 95977,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Data Table - List\u003cMap\u003cString, String\u003e\u003e right away",
  "description": "",
  "id": "test-with-data-table;data-table---list\u003cmap\u003cstring,-string\u003e\u003e-right-away",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "the following invoices are created map",
  "rows": [
    {
      "cells": [
        "amount",
        "name"
      ],
      "line": 29
    },
    {
      "cells": [
        "200",
        "Spoon"
      ],
      "line": 30
    },
    {
      "cells": [
        "222",
        "Iphone"
      ],
      "line": 31
    },
    {
      "cells": [
        "100",
        "Ipad"
      ],
      "line": 32
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User sends the above invoices",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User should have 522 in total invoices report",
  "keyword": "Then "
});
formatter.match({
  "location": "ReportSteps.theFollowingInvoicesAreCreatedMap(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 155938,
  "status": "passed"
});
formatter.match({
  "location": "ReportSteps.name2()"
});
formatter.result({
  "duration": 24895,
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
  "duration": 85982,
  "status": "passed"
});
formatter.after({
  "duration": 26795,
  "status": "passed"
});
formatter.before({
  "duration": 32964,
  "status": "passed"
});
formatter.before({
  "duration": 15336,
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
  "duration": 1456162,
  "status": "passed"
});
formatter.match({
  "location": "ReportSteps.name2()"
});
formatter.result({
  "duration": 28010,
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
  "duration": 86459,
  "status": "passed"
});
formatter.after({
  "duration": 27405,
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
  "duration": 75230,
  "status": "passed"
});
formatter.before({
  "duration": 20887,
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
  "duration": 273500,
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
  "duration": 129918,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.user_JohnDoe_should_be_navigated_to_HomePage()"
});
formatter.result({
  "duration": 24082,
  "status": "passed"
});
formatter.after({
  "duration": 144623,
  "status": "passed"
});
formatter.before({
  "duration": 266321,
  "status": "passed"
});
formatter.before({
  "duration": 44901,
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
  "duration": 184805,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userJohnDoeWithPasswordWrongPassLogsIn()"
});
formatter.result({
  "duration": 56156,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userShouldBeGivenLoginErrorMessage()"
});
formatter.result({
  "duration": 213764,
  "status": "passed"
});
formatter.after({
  "duration": 23606,
  "status": "passed"
});
formatter.before({
  "duration": 24945,
  "status": "passed"
});
formatter.before({
  "duration": 17559,
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
  "duration": 66885,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userTimAppleComWithPasswordTimceoLogsIn()"
});
formatter.result({
  "duration": 29740,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userTimeAppleComShouldBeNavigatedToHomePage()"
});
formatter.result({
  "duration": 370123,
  "status": "passed"
});
formatter.after({
  "duration": 221030,
  "status": "passed"
});
formatter.before({
  "duration": 434444,
  "status": "passed"
});
formatter.before({
  "duration": 147923,
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
  "duration": 44595,
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
  "duration": 199268,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with params",
  "description": "",
  "id": "login-scenarios-parameterized;login-with-params",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User \"tim@apple.com\" with password \"timceo\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User \"tim@apple.com\" with password \"timceo\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User \"time@apple.com\" should be navigated to HomePage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tim@apple.com",
      "offset": 6
    },
    {
      "val": "timceo",
      "offset": 36
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 282365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tim@apple.com",
      "offset": 6
    },
    {
      "val": "timceo",
      "offset": 36
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 166815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "time@apple.com",
      "offset": 6
    }
  ],
  "location": "ParamStepDefs.user_should_be_navigated_to_HomePage(String)"
});
formatter.result({
  "duration": 49563,
  "status": "passed"
});
formatter.after({
  "duration": 50465,
  "status": "passed"
});
formatter.before({
  "duration": 80163,
  "status": "passed"
});
formatter.before({
  "duration": 43705,
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
  "duration": 158288,
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
  "duration": 59448,
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
  "duration": 60106,
  "status": "passed"
});
formatter.after({
  "duration": 32773,
  "status": "passed"
});
formatter.before({
  "duration": 53192,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Negative",
  "description": "",
  "id": "login-scenarios-parameterized;negative",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "User \"bill@outlook.com\" with password \"helloWorld123\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User \"bill@outlook.com\" with password \"1242World\" logs in",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User should be given login error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "bill@outlook.com",
      "offset": 6
    },
    {
      "val": "helloWorld123",
      "offset": 39
    }
  ],
  "location": "ParamStepDefs.user_with_password_is_registered(String,String)"
});
formatter.result({
  "duration": 533605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bill@outlook.com",
      "offset": 6
    },
    {
      "val": "1242World",
      "offset": 39
    }
  ],
  "location": "ParamStepDefs.user_with_password_logs_in(String,String)"
});
formatter.result({
  "duration": 471723,
  "status": "passed"
});
formatter.match({
  "location": "FirstStepDef.userShouldBeGivenLoginErrorMessage()"
});
formatter.result({
  "duration": 100455,
  "status": "passed"
});
formatter.after({
  "duration": 33074,
  "status": "passed"
});
formatter.before({
  "duration": 32954,
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
  "duration": 327476,
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
  "duration": 90527,
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
  "duration": 465489,
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
  "duration": 136899,
  "status": "passed"
});
formatter.after({
  "duration": 36385,
  "status": "passed"
});
formatter.before({
  "duration": 87391,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Double Params - Buy functionality",
  "description": "",
  "id": "login-scenarios-parameterized;double-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User buys 20 \"Iphones\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User total should be $2000.55",
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
  "duration": 187855,
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
  "duration": 216888,
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
  "duration": 149183,
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
  "duration": 472382,
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
  "duration": 228271,
  "status": "passed"
});
formatter.after({
  "duration": 100229,
  "status": "passed"
});
formatter.before({
  "duration": 38354,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Char Params - Buy functionality",
  "description": "",
  "id": "login-scenarios-parameterized;char-params---buy-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "User \"johnDoe@gmail.com\" with password \"ExtreamnelyHardPa$$\" logs in",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User \"johnDoe@gmail.com\" should be navigated to HomePage",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User buys 20 \"Iphones\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User total should be $2000.55",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User credit standing should be \u0027A\u0027",
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
  "duration": 99076,
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
  "duration": 122392,
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
  "duration": 33249,
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
  "duration": 116080,
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
  "duration": 148620,
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
  "duration": 118111,
  "status": "passed"
});
formatter.after({
  "duration": 32872,
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
  "duration": 112302,
  "status": "passed"
});
formatter.before({
  "duration": 71135,
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
  "duration": 362872,
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
  "duration": 97857,
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
  "duration": 112285,
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
  "duration": 113274,
  "status": "passed"
});
formatter.after({
  "duration": 186259,
  "status": "passed"
});
formatter.before({
  "duration": 101515,
  "status": "passed"
});
formatter.before({
  "duration": 17585,
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
  "duration": 123970,
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
  "duration": 94591,
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
  "duration": 99973,
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
  "duration": 90116,
  "status": "passed"
});
formatter.after({
  "duration": 27663,
  "status": "passed"
});
formatter.before({
  "duration": 67299,
  "status": "passed"
});
formatter.before({
  "duration": 43304,
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
  "duration": 173452,
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
  "duration": 94575,
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
  "duration": 100060,
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
  "duration": 95830,
  "status": "passed"
});
formatter.after({
  "duration": 26328,
  "status": "passed"
});
formatter.before({
  "duration": 56709,
  "status": "passed"
});
formatter.before({
  "duration": 45611,
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
  "duration": 180092,
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
  "duration": 109697,
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
  "duration": 1585871,
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
  "duration": 810450,
  "status": "passed"
});
formatter.after({
  "duration": 216884,
  "status": "passed"
});
formatter.before({
  "duration": 108515,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "1",
  "description": "",
  "id": "applestore-with-scenario-outlines;1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "Apple Store has 100 \"Iphone\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User buys 10 \"Iphone\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User should have 10 \"Iphone\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Applse Store should have 90 \"Iphone\"",
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
  "duration": 973266,
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
  "duration": 193334,
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
  "duration": 301813,
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
  "duration": 353633,
  "status": "passed"
});
formatter.after({
  "duration": 72256,
  "status": "passed"
});
formatter.before({
  "duration": 125041,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "2",
  "description": "",
  "id": "applestore-with-scenario-outlines;2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Apple Store has 50 \"Ipads\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User buys 5 \"Ipads\"",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User should have 5 \"Ipads\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Applse Store should have 45 \"Ipads\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 16
    },
    {
      "val": "Ipads",
      "offset": 20
    }
  ],
  "location": "AppleStoreSteps.appleStoreHas(int,String)"
});
formatter.result({
  "duration": 246279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    },
    {
      "val": "Ipads",
      "offset": 13
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "duration": 111009,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 17
    },
    {
      "val": "Ipads",
      "offset": 20
    }
  ],
  "location": "ParamStepDefs.userShouldHave(int,String)"
});
formatter.result({
  "duration": 870102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 25
    },
    {
      "val": "Ipads",
      "offset": 29
    }
  ],
  "location": "AppleStoreSteps.applseStoreShouldHave(int,String)"
});
formatter.result({
  "duration": 912346,
  "status": "passed"
});
formatter.after({
  "duration": 124451,
  "status": "passed"
});
formatter.before({
  "duration": 147954,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "3",
  "description": "",
  "id": "applestore-with-scenario-outlines;3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "Apple Store has 80 \"Watches\"",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User buys 10 \"Watches\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User should have 10 \"Iphones\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Applse Store should have 70 \"Watches\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 16
    },
    {
      "val": "Watches",
      "offset": 20
    }
  ],
  "location": "AppleStoreSteps.appleStoreHas(int,String)"
});
formatter.result({
  "duration": 1236777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    },
    {
      "val": "Watches",
      "offset": 14
    }
  ],
  "location": "ParamStepDefs.userBuys(int,String)"
});
formatter.result({
  "duration": 175210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
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
  "duration": 212725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 25
    },
    {
      "val": "Watches",
      "offset": 29
    }
  ],
  "location": "AppleStoreSteps.applseStoreShouldHave(int,String)"
});
formatter.result({
  "duration": 205787,
  "status": "passed"
});
formatter.after({
  "duration": 32549,
  "status": "passed"
});
formatter.before({
  "duration": 234940,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "4",
  "description": "",
  "id": "applestore-with-scenario-outlines;4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "Apple Store has 11 \"Mac\"",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "User buys 10 \"Mac\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User should have 10 \"Mac\"",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Applse Store should have 1 \"Mac\"",
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
  "duration": 1319484,
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
  "duration": 186611,
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
  "duration": 211176,
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
  "duration": 816325,
  "status": "passed"
});
formatter.after({
  "duration": 61246,
  "status": "passed"
});
});