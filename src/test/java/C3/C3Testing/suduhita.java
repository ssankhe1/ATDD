package C3.C3Testing;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class suduhita {
	@Given("^User Open Firefox$")
	public void user_Open_Firefox() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("I am Firefox");

	}

	@When("^User inputs web URL$")
	public void user_inputs_web_URL() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("I added the URL");

	}

	@Then("^Usr is able to input username$")
	public void usr_is_able_to_input_username() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("I added the username");

	}

	@Then("^Usr is able to input password$")
	public void usr_is_able_to_input_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("I added the passwrod");

	}
}
