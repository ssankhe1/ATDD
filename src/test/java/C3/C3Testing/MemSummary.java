package C3.C3Testing;

import java.io.File;
import java.io.FileInputStream;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

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
		//WebElement element = driver.findElement(By.xpath("/html/body/div[2]/div[1]/span[1]/div/div/ul/li[1]/a/span"));
	    //String strng = element.getText();
	    //System.out.println(strng);
	    //Assert.assertEquals("Summary", strng);
	    
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
	           
	     	        System.out.println(MenuOption +" exists on the page");
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
}
