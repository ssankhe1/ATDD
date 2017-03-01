package C3.C3Testing;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Assertions extends TestingExcel
{
	
	@Given("^I want to navigate to Member Summary$")
	public void i_want_to_navigate_to_Member_Summary() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
	    ExcelTest(driver);

	}

	@When("^Member has a Medical Coverage$")
	public void member_has_a_Medical_Coverage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.xpath("/html/body/div[2]/div[1]/span[1]/div/div/ul/li[1]/a")).click();
	}

	@Then("^Validate Medical Coverage values$")
	public void validate_Medical_Coverage_values() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("We are in Member Summary");
	    WebElement element = driver.findElement(By.xpath("/html/body/div[2]/div[2]/form/u:writeerror/table[2]/tbody/tr[1]/td[2]/table/tbody/tr[10]/td[1]"));
	    String strng = element.getText();
	    System.out.println(strng);
	    Assert.assertEquals("ACO Network Name:", strng);

	}



}
