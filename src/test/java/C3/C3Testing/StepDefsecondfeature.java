package C3.C3Testing;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefsecondfeature {

@Given("^I want to write a step with precondition(\\d+)$")
public void i_want_to_write_a_step_with_precondition(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("This is second feature Given");
}

@When("^I complete action(\\d+)$")
public void i_complete_action(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("This is second feature When");

}

@Then("^I validate the outcomes(\\d+)$")
public void i_validate_the_outcomes(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("This is second feature Then");

}


}
