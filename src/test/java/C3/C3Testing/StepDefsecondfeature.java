package C3.C3Testing;

import java.io.File;
import java.io.FileInputStream;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefsecondfeature  {

	
	
	public WebDriver driver = new FirefoxDriver();
	
@Given("^I want to write a step with precondition(\\d+)$")
public void i_want_to_write_a_step_with_precondition(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Login to ICUE ALPHA");
    driver.get("http://icuealpha.uhc.com/icue/index.jsp");
}

@When("^I complete action(\\d+)$")
public void i_complete_action(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Enter Username and Password");
     
   driver.findElement(By.id("userID")).sendKeys("SSANKHE1");
   driver.findElement(By.id("password")).sendKeys("Mom123$%");
   driver.findElement(By.name("action")).click();
}

@Then("^I validate the outcomes(\\d+)$")
public void i_validate_the_outcomes(int arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Data Driven Testing");
    //Enter Menu Options
    
    	try {
      	  // Specify the path of file
      	  File src=new File("C:\\Users\\ssankhe1\\workspacemars\\C3Testing\\src\\test\\DataSheets\\DataDrive.xlsx");
    	 
      	   // load file
      	   FileInputStream fis=new FileInputStream(src);
      	 
      	   // Load workbook
      	   XSSFWorkbook wb=new XSSFWorkbook(fis);
      	   
      	   // Load sheet- Here we are loading first sheetonly
      	   XSSFSheet sh1= wb.getSheetAt(0);    	 
      	  // getRow() specify which row we want to read.
      	 
      	  // and getCell() specify which column to read.
      	  // getStringCellValue() specify that we are reading String data.
      	 for (int i=0;i<5;i++)
         {
      	 String MenuOption = sh1.getRow(i).getCell(0).getRawValue();
      	     	 
             driver.findElement(By.id("menuOption")).sendKeys(MenuOption);
             driver.findElement(By.xpath("/html/body/div[2]/div/form/table[1]/tbody/tr/td[1]/table/tbody/tr[1]/td/input[2]")).click();
             driver.findElement(By.xpath("/html/body/div[1]/div/div/div/ul/li[1]/a")).click();
             driver.findElement(By.xpath("/html/body/div[1]/div/div/div/ul/li[1]/ul/li[1]/a")).click();
             System.out.println("Hello");
      	  }
      	 }
      	 catch (Exception e) {
      	 
      	   System.out.println(e.getMessage());
      	 
      	  }
    	WebElement element = driver.findElement(By.id("header1"));
    	String strng = element.getText();
    	Assert.assertEquals("Welcome sourabh (SSANKHE1)", strng);    	

    }

    
}



