package C3.C3Testing;

import org.openqa.selenium.By;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MemSummary extends TestingExcel{
	@Given("^I want to login to ICUE$")
	public void i_want_to_login_to_ICUE() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    ExcelTest(driver);
	}

	@When("^I search a member$")
	public void i_search_a_member() throws Throwable {
	    System.out.println("I am in Member Eligibility");
	    
	}

	@Then("^Go to Member Summary$")
	public void go_to_Member_Summary() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[2]/div[1]/span[1]/div/div/ul/li[1]/a/span")).click();
	    System.out.println("I am in Member Eligibility");

	}
}
