$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testing.feature");
formatter.feature({
  "id": "title-of-your-feature",
  "tags": [
    {
      "name": "@smoke",
      "line": 8
    }
  ],
  "description": "I want to use this template for my feature file",
  "name": "Title of your feature",
  "keyword": "Feature",
  "line": 9,
  "comments": [
    {
      "value": "#Author: sourabh.sankhe@optum.com",
      "line": 1
    },
    {
      "value": "#Feature: Smoke Test ICUE Alpha",
      "line": 2
    },
    {
      "value": "#Given: Login to ICUE",
      "line": 3
    },
    {
      "value": "#When: Some key actions",
      "line": 4
    },
    {
      "value": "#Then: To observe outcomes or validation",
      "line": 5
    },
    {
      "value": "#Sample Feature Definition",
      "line": 7
    }
  ]
});
formatter.scenario({
  "id": "title-of-your-feature;title-of-your-scenario",
  "tags": [
    {
      "name": "@smoke",
      "line": 11
    }
  ],
  "description": "",
  "name": "Title of your scenario",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I want to write a step with precondition",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "I complete action",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "location": "StepDef.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 18021984089,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_complete_action()"
});
formatter.result({
  "duration": 16903189522,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 1816128967,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[1]/span[1]/div/div/ul/li[3]/a/span\"}\nCommand duration or timeout: 1.63 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.27.57\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/div[1]/span[1]/div/div/ul/li[3]/a/span}\nSession ID: b8e4cf54-3277-4d7c-b9de-57fd41ea08b7\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d38.0.1}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat C3.C3Testing.StepDef.ClickAssessment(StepDef.java:102)\r\n\tat C3.C3Testing.StepDef.i_validate_the_outcomes(StepDef.java:46)\r\n\tat ✽.Then I validate the outcomes(Testing.feature:15)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[1]/span[1]/div/div/ul/li[3]/a/span\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.27.57\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1713861827377946447webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1713861827377946447webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1713861827377946447webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1713861827377946447webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1713861827377946447webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n"
});
formatter.uri("Testing2.feature");
formatter.feature({
  "id": "title-of-your-feature2",
  "tags": [
    {
      "name": "@smoke",
      "line": 8
    }
  ],
  "description": "I want to use this template for my feature file",
  "name": "Title of your feature2",
  "keyword": "Feature",
  "line": 9,
  "comments": [
    {
      "value": "#Author: sourabh.sankhe@optum.com",
      "line": 1
    },
    {
      "value": "#Feature: Smoke Test ICUE Bravo",
      "line": 2
    },
    {
      "value": "#Given: Login to ICUE and Run a loop of Menu Options",
      "line": 3
    },
    {
      "value": "#When: Some key actions",
      "line": 4
    },
    {
      "value": "#Then: To observe outcomes or validation",
      "line": 5
    },
    {
      "value": "#Sample Feature Definition",
      "line": 7
    }
  ]
});
formatter.scenario({
  "id": "title-of-your-feature2;title-of-your-scenario2",
  "tags": [
    {
      "name": "@smoke",
      "line": 11
    }
  ],
  "description": "",
  "name": "Title of your scenario2",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I want to write a step with precondition2",
  "keyword": "Given ",
  "line": 13
});
formatter.step({
  "name": "I complete action2",
  "keyword": "When ",
  "line": 14
});
formatter.step({
  "name": "I validate the outcomes2",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 40
    }
  ],
  "location": "StepDefsecondfeature.i_want_to_write_a_step_with_precondition(int)"
});
formatter.result({
  "duration": 10469786849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "StepDefsecondfeature.i_complete_action(int)"
});
formatter.result({
  "duration": 2632405611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "StepDefsecondfeature.i_validate_the_outcomes(int)"
});
formatter.result({
  "duration": 29687731745,
  "status": "passed"
});
});