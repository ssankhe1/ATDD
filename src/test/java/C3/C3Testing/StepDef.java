package C3.C3Testing;

import java.io.File;
import java.io.FileInputStream;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef extends TestingExcel{
	
public WebDriver driver = new FirefoxDriver();
public static  String Assessment="/html/body/div[2]/div[1]/span[1]/div/div/ul/li[10]/a/span";
public static  String Provider="/html/body/div[2]/div[1]/span[1]/div/div/ul/li[3]"; 
public static  String MemberDetail="/html/body/div[2]/div[1]/span[1]/div/div/ul/li[2]";
public String username; 
public String password;

@Given("^I want to write a step with precondition$")
	public void i_want_to_write_a_step_with_precondition() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Helloworld- This is a Given Statement");
	    Login();
	}
@When("^I complete action$")
	public void i_complete_action() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Helloworld- This is a When Statement");
	    SearchMember();
	}
@Then("^I validate the outcomes$")
	public void i_validate_the_outcomes() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("Helloworld- This is a Then Statement");
	    ClickAssessment();
	    driver.close();
	}

private WebDriver Login() {
	// TODO Auto-generated method stub
    System.out.println("I am in Login");
    driver.get("http://icuealpha.uhc.com/icue/index.jsp");
    	  //Read from Excel
    try {
    	  // Specify the path of file
    	  File src=new File("C:\\Users\\ssankhe1\\workspacemars\\C3Testing\\src\\test\\DataSheets\\TestData.xlsx");
  	 
    	   // load file
    	   FileInputStream fis=new FileInputStream(src);
    	 
    	   // Load workbook
    	   XSSFWorkbook wb=new XSSFWorkbook(fis);
    	   
    	   // Load sheet- Here we are loading first sheetonly
    	   XSSFSheet sh1= wb.getSheetAt(0);    	 
    	  // getRow() specify which row we want to read.
    	 
    	  // and getCell() specify which column to read.
    	  // getStringCellValue() specify that we are reading String data.
    	 
    	 username = sh1.getRow(0).getCell(0).getStringCellValue();
    	 password = sh1.getRow(1).getCell(1).getStringCellValue();
    	     	 
    	 System.out.println(username);
       	 System.out.println(password);
    	 
    	  } catch (Exception e) {
    	 
    	   System.out.println(e.getMessage());
    	 
    	  }
       
    driver.findElement(By.id("userID")).sendKeys("SSANKHE1");
    driver.findElement(By.id("password")).sendKeys("Spring123$%");
    driver.findElement(By.name("action")).click();
    return driver;
}
protected WebDriver SearchMember() {
	// TODO Auto-generated method stub
    System.out.println("I am in SearchMember");
    driver.findElement(By.id("7")).click();
    waitForPageLoaded();
    driver.findElement(By.id("memberIDTextmbrIdSearch")).sendKeys("00999072010");
    driver.findElement(By.name("PerformAction")).click();
    driver.findElement(By.xpath("/html/body/div[2]/div/form/div[3]/div/div/div/div/div[1]/div[2]/div/div[4]/table/tbody/tr[1]/td[2]/div/a")).click();
    return driver;
    
}
private WebDriver ClickAssessment() {
    driver.findElement(By.xpath(Assessment)).click();
   //driver.findElement(By.xpath(Provider)).click();
    //driver.findElement(By.xpath(MemberDetail)).click();
    //driver.getPageSource().contains("ACO Network Name:");
          return driver;
	// TODO Auto-generated method stub
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