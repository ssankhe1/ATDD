package C3.C3Testing;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

public class TestingExcel {
	public WebDriver driver = new FirefoxDriver();
	public WebDriver ExcelTest(WebDriver driver) throws Throwable{
  
		driver.get("http://icuealpha.uhc.com/icue/index.jsp");
		driver.findElement(By.id("userID")).sendKeys("SSANKHE1");
		driver.findElement(By.id("password")).sendKeys("Spring123$%");
		driver.findElement(By.name("action")).click();
	    driver.findElement(By.id("7")).click();
	    waitForPageLoaded();
	    driver.findElement(By.id("memberIDTextmbrIdSearch")).sendKeys("00999072010");
	    driver.findElement(By.name("PerformAction")).click();
	    driver.findElement(By.xpath("/html/body/div[2]/div/form/div[3]/div/div/div/div/div[1]/div[2]/div/div[6]/table/tbody/tr[1]/td[2]/div/a")).click();
  return driver;

  
 }
	private WebDriver waitForPageLoaded() {
        ExpectedCondition<Boolean> expectation = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver driver) {
                        return ((JavascriptExecutor) driver).executeScript("return document.readyState").toString().equals("complete");
                    }
                };
        try {
            Thread.sleep(3000);
            WebDriverWait wait = new WebDriverWait(driver, 30);
            wait.until(expectation);
        } catch (Throwable error) {
            Assert.fail("Timeout waiting for Page Load Request to complete.");
        }
		return driver;
    }
}
