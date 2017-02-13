package C3.C3Testing;

import java.io.File;
import java.util.Set;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.sun.jna.platform.FileUtils;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class newfeature {

	public WebDriver driver = new FirefoxDriver();
	String handle;
	@Given("^I want to Open Alpha, Notes$")
	public void i_want_to_Open_Alpha_Notes() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("http://icuealpha.uhc.com/icue/index.jsp");
		driver.findElement(By.id("userID")).sendKeys("SSANKHE1");
		driver.findElement(By.id("password")).sendKeys("Spring123$%");
		driver.findElement(By.name("action")).click();
		
	}

	@When("^Notes can be created$")
	public void notes_can_be_created() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    handle= driver.getWindowHandle();
	    System.out.println(handle);
		driver.findElement(By.xpath("/html/body/div[2]/div/form/table[2]/tbody/tr/td[2]/a[7]")).click();
		//driver.wait(10);
		Set handles = driver.getWindowHandles();
	    System.out.println(handles);
	    for (String handle1 : driver.getWindowHandles()) {
        	System.out.println("Current Page is : "+ handle1);
        	driver.switchTo().window(handle1);
       	    }
	    
    	waitForPageLoaded();
  driver.findElement(By.cssSelector("a[href*='http://kl.uhc.com/']")).click();      
  //driver.findElement(By.xpath("/html/body/form/div[2]/table/tbody/tr[2]/td/div/table/tbody/tr/td[1]/table/tbody/tr/td[2]/input")).click();
  String Title=driver.getTitle();
  System.out.println("Title of the page is below");
  System.out.println(Title);
  driver.close();

	}

	@Then("^validate notes$")
	public void validate_notes() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Helloworld- This is a Then Statement");
	    driver.quit();
	}
	private WebDriver waitForPageLoaded() {
        ExpectedCondition<Boolean> expectation = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver driver) {
                        return ((JavascriptExecutor) driver).executeScript("return document.readyState").toString().equals("complete");
                    }
                };
        try {
            Thread.sleep(5000);
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(expectation);
        } catch (Throwable error) {
            Assert.fail("Timeout waiting for Page Load Request to complete.");
        }
		return driver;
    }
}
