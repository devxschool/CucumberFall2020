package step_defs;


import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class AppleStoreSteps {

    //Just like Junit/ TestNG
    //Cucumber has @Before and @After ->
    //@Before runs once before every scenario
    //@After runs once after every scenario.


    @Given("^Apple Store has (\\d+) \"([^\"]*)\"$")
    public void appleStoreHas(int amount, String item)  {
        System.out.println("Loading " + amount + item +"s");
    }

    @And("^Applse Store should have (\\d+) \"([^\"]*)\"$")
    public void applseStoreShouldHave(int amount, String item) {
        System.out.println("Current Apple Store Stock has " + amount + item +"s");
    }

}
