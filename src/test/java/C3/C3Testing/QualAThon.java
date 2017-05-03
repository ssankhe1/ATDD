package C3.C3Testing;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class QualAThon extends TestingExcel {

	@Given("^I want to login to ICUE Master$")
	public void i_want_to_login_to_ICUE_Master() throws Throwable {
	    // Call ICUE and  Member Search
		ExcelTest(driver);
	   	}

	@When("^Navigate to Member Summary and Validate all Components$")
	public void navigate_to_Member_Summary_and_Validate_all_Components() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

		driver.findElement(By.xpath("/html/body/div[2]/div[1]/span[1]/div/div/ul/li[1]/a/span")).click();
	    System.out.println("I am in Member Summary");
		  WebElement Drpdwn = driver.findElement(By.xpath("/html/body/div[2]/div[2]/form/table[1]/thead/tr/th/div[2]/div/select/option[2]"));
	    Assert.assertTrue(Drpdwn.isSelected());
	    Assert.assertTrue(Drpdwn.isDisplayed());
	}

	@Then("^Validate Preference$")
	public void validate_Preference() throws Throwable {
	    System.out.println("I am in Member Summary");
	    Runtime.getRuntime().exec("C:\\Users\\ssankhe1\\Desktop\\ATDD Cloud\\AutoIT\\ClickProvider.exe");

	}

}
