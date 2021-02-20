package step_defs;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class AppleStoreSteps {



    @Given("^Apple Store has (\\d+) \"([^\"]*)\"$")
    public void appleStoreHas(int amount, String item)  {
        System.out.println("Loading " + amount + item +"s");
    }


    @And("^Applse Store should have (\\d+) \"([^\"]*)\"$")
    public void applseStoreShouldHave(int amount, String item) {
        System.out.println("Current Apple Store Stock has " + amount + item +"s");
    }
}
