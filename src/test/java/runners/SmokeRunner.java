package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.junit.runners.Suite;


//Annotations can are labels for classes, methods, constructors and params.


//We are using RunWith annotation to annotate(let the jvm know that this class
// will be a Junit Test Runner class.
@RunWith(Cucumber.class)
//Cucumber Options Annotations is used to setup runner class configs like which feature files should be scanner
//where to look for steps defs etc.
@CucumberOptions(
        //which feature files to scan
        //classpath - is root path of the project compiled code.
        features = {"classpath:features"},
        //where to look for step defs
        glue = {"step_defs"},
        //tags are same thing as groups in TestNG(test filters)
        //tags applied on a feature file level are applied to all scenarios in that feature file
        //tilde - ~ means do not include this tag
        tags = {"@smoke, @hello", "~@ignore", "~@multipleaccount"} // "@tag", "@tag" -> two seprate double quotes, mean &&
        //"@tag, @tag2" -> a single double mean ||
)
public class SmokeRunner {

}


///let's say you have scenarios for Apple Pay iwatch, iphone, Ipad.
///Same test scenarios for each device.
///SmokeIwatch -> "@iwatch", "@smoke"
//SmokeIphone
//SmokeIpad
//SmokeIphoneAndIpad -> "@smoke", "@iphone, @ipad";