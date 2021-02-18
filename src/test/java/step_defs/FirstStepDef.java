package step_defs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FirstStepDef {


    /** Cucumber uses regex to map feature file steps with glue code step definitons **/

    @Given("^User JohnDoe with password abc(\\d+) is registered$")
    public void user_JohnDoe_with_password_abc_is_registered(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Registring user JohnDoe with password abc123");
    }

    @When("^User JohnDoe with password abc(\\d+) logs in$")
    public void user_JohnDoe_with_password_abc_logs_in(int arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("JohnDoe with password abc123 logging in");
    }

    @Then("^User JohnDoe should be navigated to HomePage$")
    public void user_JohnDoe_should_be_navigated_to_HomePage() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("John doe is in the home page");
    }


}
