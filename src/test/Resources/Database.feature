#Author: sourabh.sankhe@optum.com
#Feature: Database Testing

#Sample Feature Definition 
@smoke1
Feature: Database Testing

@smoke1
Scenario: Database Test
Given Connect to DB
When Run a Select Query
Then Validate table and columns
	