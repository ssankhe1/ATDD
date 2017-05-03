package C3.C3Testing;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.Set;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.xerces.util.URI;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import com.google.gson.JsonObject;
import com.rallydev.rest.RallyRestApi;
import com.rallydev.rest.request.CreateRequest;
import com.rallydev.rest.request.QueryRequest;
import com.rallydev.rest.response.CreateResponse;
import com.rallydev.rest.response.QueryResponse;
import com.rallydev.rest.util.Fetch;
import com.rallydev.rest.util.QueryFilter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MemSummary extends TestingExcel{
	//Begin Scenario 1
	

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
		//WebElement element = driver.findElement(By.xpath("/html/body/div[2]/div[1]/span[1]/div/div/ul/li[1]/a/span"));
	    //String strng = element.getText();
	    //System.out.println(strng);
	    //Assert.assertEquals("Summary", strng);
		//WarningMessage(driver);	
		//driver.findElement(By.cssSelector("input[type='button'][value='Continue Action']")).click();
		//driver.findElement(By.className("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable ui-dialog-buttons"));
		driver.switchTo().activeElement().click();
		driver.switchTo().activeElement();

	}
	
	@Then("^Validate Field Values$")
	public void validate_Field_Values() throws Throwable {
		try {
	      	  // Specify the path of file
	      	  File src=new File("C:\\Users\\ssankhe1\\workspacemars\\C3Testing\\src\\test\\DataSheets\\Membersummary.xlsx");
	    	 
	      	   // load file
	      	   FileInputStream fis=new FileInputStream(src);
	      	 
	      	   // Load workbook
	      	   XSSFWorkbook wb=new XSSFWorkbook(fis);
	      	   
	      	   // Load sheet- Here we are loading first sheetonly
	      	   XSSFSheet sh1= wb.getSheetAt(0);    	 
	      	  // getRow() specify which row we want to read.
	      	 
	      	  // and getCell() specify which column to read.
	      	  // getStringCellValue() specify that we are reading String data.
	      	 for (int i=0;i<16;i++)
	         {
	      	 String MenuOption = sh1.getRow(i).getCell(0).getStringCellValue();
	             try {
	             if(driver.getPageSource().contains(MenuOption))
	           
	     	        System.out.println(MenuOption +" field exists on the page");
	   	      	 	//Cell resultCell= sh1.getRow(i).getCell(1);
	   	      	 	//resultCell.setCellValue("PASS");
	                   
	           
	     	    else  
	     	    
	     	    	System.err.println(MenuOption + " is not present on the page");
	             
	             }
	             
	             catch (Exception e) {
	    	      	 
		  	      	   System.out.println("I am in Catch 1");
		  	      	 
		  	      	  }
	            
	              
	             
	      	  }// for loop ends
	      	 
	      	 }
	      	 catch (Exception e) {
	      	 
	      	   System.out.println("I am in Catch 2");
     	 
	      	  }
	}
	@Then("^Validate Other Values$")
	public void validate_Other_Values() throws Throwable {
		Select Preference = new Select(driver.findElement(By.id("selectedPageSetting")));
		Preference.selectByValue("-1");
		//Select SummaryPreference = new Select(driver.findElement(By.id("selectedPageSetting")));
		//SummaryPreference.selectByValue("1007");
		WebElement element = driver.findElement(By.xpath("/html/body/div[2]/div[3]/form/table/tbody/tr/td[1]/ul/li[1]")); 
		WebElement target = driver.findElement(By.id("uiPageContainerA"));
		(new Actions(driver)).dragAndDrop(element, target).perform();
		
		driver.findElement(By.id("uiPageSettingName")).sendKeys("Testing with Automation");
		Select Dropdown = new Select(driver.findElement(By.id("action")));
		Dropdown.selectByValue("saveUiPageSetting");
		driver.findElement(By.name("PerformAction")).click();
		driver.findElement(By.xpath("/html/body/div[2]/div[1]/span[1]/div/div/ul/li[2]/a"));// Member Details Tab
		driver.findElement(By.xpath("/html/body/div[2]/div[1]/span[1]/div/div/ul/li[1]"));// Member Summary
		driver.close();
	}
	
	//Begin Scenario 2
	@Given("^I am on Member Summary Page$")
	public void i_am_on_Member_Summary_Page() throws Throwable {
		ExcelTest(driver);
		driver.findElement(By.xpath("/html/body/div[2]/div[1]/span[1]/div/div/ul/li[1]/a/span")).click();
		//WarningMessage(driver);	
		driver.switchTo().activeElement().click();
		driver.switchTo().activeElement();
		
		
		Select Preference = new Select(driver.findElement(By.id("selectedPageSetting")));
		Preference.selectByValue("-1");		
	    // Write code here that turns the phrase above into concrete actions
     	   System.out.println("Validate all Components are present on Member Summary Configuration Page");
     	   
     	  try {
	      	  // Specify the path of file
	      	  File src=new File("C:\\Users\\ssankhe1\\workspacemars\\C3Testing\\src\\test\\DataSheets\\MembersummaryConfig.xlsx");
	    	 
	      	   // load file
	      	   FileInputStream fis=new FileInputStream(src);
	      	 
	      	   // Load workbook
	      	   XSSFWorkbook wb=new XSSFWorkbook(fis);
	      	   
	      	   // Load sheet- Here we are loading first sheetonly
	      	   XSSFSheet sh1= wb.getSheetAt(0);    	 
	      	  // getRow() specify which row we want to read.
	      	 
	      	  // and getCell() specify which column to read.
	      	  // getStringCellValue() specify that we are reading String data.
	      	 for (int i=0;i<20;i++)
	         {
	      	 String MenuOption = sh1.getRow(i).getCell(0).getStringCellValue();
	             try {
	             if(driver.getPageSource().contains(MenuOption))
	           
	     	        System.out.println(MenuOption +" Component exists on the page");
	   	      	 	//Cell resultCell= sh1.getRow(i).getCell(1);
	   	      	 	//resultCell.setCellValue("PASS");
	                   
	           
	     	    else  
	     	    
	     	    	System.err.println(MenuOption + " is not present on the page");
	             
	             }
	             
	             catch (Exception e) {
	    	      	 
		  	      	   System.out.println("I am in Catch 1");
		  	      	 
		  	      	  }
	            
	              
	             
	      	  }// for loop ends
	      	 
	      	 }
	      	 catch (Exception e) {
	      	 
	      	   System.out.println("I am in Catch 2 why?");
     	 
	      	  }
	}

	private WebDriver WarningMessage(WebDriver driver) {
		// TODO Auto-generated method stub
		String handle= driver.getWindowHandle();
		 
        System.out.println(handle);

        // Click on the Button "New Message Window"

        driver.findElement(By.xpath("/html/body/div[9]/div[3]/div/button[1]")).click();

        // Store and Print the name of all the windows open	              

        Set handles = driver.getWindowHandles();

        System.out.println(handles);

        // Pass a window handle to the other window

        for (String handle1 : driver.getWindowHandles()) {

        	System.out.println(handle1);

        	driver.switchTo().window(handle1);

        	}
        return driver;
		
	}

	@When("^Add new Preference$")
	public void add_new_Preference() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
        driver.findElement(By.xpath(MemberSummary)).click();
        driver.findElement(By.xpath(MemberDetail)).click();
       

	}

	@Then("^Validate preference in Member Summary$")
	public void validate_preference_in_Member_Summary() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
     	   System.out.println("Updating Test Case Results");
     	  Rally.main(null);
     	       	  driver.close();
  
     	   
	}
	
}
