#Author: Sourabh Sankhe

@smoke
Feature: Member Summary
	I want to use this template for my feature file


Scenario: Member Summary
Given I want to login to ICUE
When I search a member
Then Go to Member Summary
And Validate Field Values
And Validate Other Values

Scenario: Member Summary Configuration Page
Given I am on Member Summary Page
When Add new Preference
Then Validate preference in Member Summary

