#Author: sourabh.sankhe@optum.com
#Feature: Database Testing

#Sample Feature Definition 
@smoke
Feature: Database Testing

@smoke
Scenario: Database Test
Given Connect to DB
When Run a Select Query
Then Validate table and columns
	