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


    @When("^User JohnDoe with password wrongPass logs in$")
    public void userJohnDoeWithPasswordWrongPassLogsIn() {
        System.out.println("John Doe with pass WrongPass Logged in");
    }

    @Then("^User should be given login error message$")
    public void userShouldBeGivenLoginErrorMessage() {
        System.out.println("Invalid Password");
    }


    @Given("^User tim@apple\\.com with password timceo is registered$")
    public void userTimAppleComWithPasswordTimceoIsRegistered() {
        System.out.println("tim@apple.com with timeceo is registering");
    }

    @When("^User tim@apple\\.com with password timceo logs in$")
    public void userTimAppleComWithPasswordTimceoLogsIn() {
        System.out.println("tim@apple.com with timeceo logs in");
    }

    @Then("^User time@apple\\.com should be navigated to HomePage$")
    public void userTimeAppleComShouldBeNavigatedToHomePage() {
        System.out.println("tim@apple.com should on the home page");
    }
}
