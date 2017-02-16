

package TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/Resources",glue={"C3.C3Testing"}, tags= {"@smoke"},
format={"html:target/cucumber-html-report"},
plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-html-report/cucumber.json"})

public class RunnerTest {

	//
	

}