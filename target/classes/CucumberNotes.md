###Cucumber

Cucumber is a tool that supports Behavior DrivenDevelopment (BDD). It offers a way to write teststhat anybody can understand, regardless of theirtechnical knowledge.

What is the problem with reading tests requiring technical knowledge? 
BA, PO, SCRUM MASTER, Manual QAs - you have to explain them what's your test doing.
When there is a uncertainty about a test failure due to not clear requirements.
You have to explain PO the exact test scenario in a written form. Too much time for explaining. 

Documentation - explain the flow of the work.


##Feature file
is one file that contains tests for one functionality. For every functionality you create
one feature file. 

Every feature file should start with a Feature: keyword.

Feature files are written in Gherkin Language. 

##Scenario
One Scenario is one test. Scenarios - Test Scenario.


##Steps
Given -> should be used for pre requisite(setup) test steps. Past tense should used ex:
Given User JohnDoe is registered.
When -> should be used for action steps of actual functionality of the test. present tense
When User JognDoe with password 123Pass logs in
Then -> should be used for validation(assertion) of the result. use should word. 
Then User JohnDoe should be navigated to homePage.


And ->  when you have multiple pre requisite or action steps. you dont want to have
Given
Given
Given
When
When
When
Then
Then

rather
Given
And
And
When
And
And
Then
And


##Step definitions (Glue Code)
Cucumber masks the technical testing steps with the help of Gherkin Language. in order for us
to map those gherkin steps to a java code Cucumber uses step definitons. 

Step definition is a java glue code which maps to a corresponding feature file step.