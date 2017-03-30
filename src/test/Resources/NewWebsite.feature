#Author: sankhe.saurabh@gmail.com

@smoke
Feature: Testing a new website
@smoke
Scenario: Testing a new website (http://www.vrlbus.in/vrl2013/register_customer.aspx)
Given I want navigate to new website
When Added required fields
Then read captcha
