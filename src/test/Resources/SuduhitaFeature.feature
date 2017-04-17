#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.

@tag
Feature: Login to my website
	
Scenario: Login to my website
Given User Open Firefox
When User inputs web URL
Then Usr is able to input username
And Usr is able to input password
