package C3.C3Testing;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewWebsite {
	public WebDriver driver = new FirefoxDriver();

	@Given("^I want navigate to new website$")
	public void i_want_navigate_to_new_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("http://www.vrlbus.in/vrl2013/register_customer.aspx");
			}

	@When("^Added required fields$")
	public void added_required_fields() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("FIRSTNAME")).sendKeys("Test");
		driver.findElement(By.id("LASTNAME")).sendKeys("Ready");
		driver.findElement(By.id("MOBILENUMBER")).sendKeys("9852673876");
		driver.findElement(By.id("COMPANY")).sendKeys("Google");
		driver.findElement(By.id("ADDRESS")).sendKeys("International Airport");
		driver.findElement(By.id("POSTALCODE")).sendKeys("4000054");
		Select City = new Select(driver.findElement(By.id("CITYID")));
		City.selectByValue("80");
		Select State = new Select(driver.findElement(By.id("STATEID")));
		State.selectByValue("4");
		driver.findElement(By.id("LOGINNAME")).sendKeys("test@gmail.com");

	}

	@Then("^read captcha$")
	public void read_captcha() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//Read Capthatext
		//Captcha();
		//System.in.toString()
		//String capcha =driver.findElement(By.id("imgCaptcha")).getText();
		//driver.findElement(By.id("CAPTCHATEXT")).sendKeys(capcha);
		driver.findElement(By.id("terms_conditions")).click();
		driver.findElement(By.id("Button1")).click();
		driver.switchTo().alert().accept();
		driver.findElement(By.id("Button1")).click();
		driver.close();

	}

	//private void Captcha() {
		// TODO Auto-generated method stub
		
		
	//}
	
}
