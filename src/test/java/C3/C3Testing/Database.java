package C3.C3Testing;

import java.beans.Statement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import oracle.jdbc.driver.OracleDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Database {
	
	Connection con= null;
	@Given("^Connect to DB$")
	public void connect_to_DB() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   System.out.println("Hello Connect to DB");
	   
String DB_URL = "DB URL";   
String DB_USER = "test"; 
String DB_PASSWORD = "test"; 


String dbClass = "oracle.jdbc.driver.OracleDriver"; 
Class.forName(dbClass).newInstance(); 

Connection con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
//Statement smt=(Statement) con.createStatement();
//ResultSet rs=  ((java.sql.Statement) smt).executeQuery("select SRC_MBR_CD from mbr where mbr_id='2549001'");
java.sql.Statement stmt = con.createStatement();
String query = "select FST_NM from TEST where mbr_id='xyz'";
ResultSet result = stmt.executeQuery(query);
while (result.next()){
	String myName = result.getString(1);								        
    System.out.println("First Name is " + myName);

}
con.close();

}

	

	@When("^Run a Select Query$")
	public void run_a_Select_Query() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		   System.out.println("Run a Select Query");

	}

	@Then("^Validate table and columns$")
	public void validate_table_and_columns() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		   System.out.println("Validate table and columns");

	}

}
