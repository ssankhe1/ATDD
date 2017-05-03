$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MemberSummary.feature");
formatter.feature({
  "id": "member-summary",
  "tags": [
    {
      "name": "@smoke",
      "line": 3
    }
  ],
  "description": "I want to use this template for my feature file\u003c\u003e",
  "name": "Member Summary",
  "keyword": "Feature",
  "line": 4,
  "comments": [
    {
      "value": "#Author: Sourabh Sankhe",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "member-summary;member-summary",
  "description": "",
  "name": "Member Summary",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I want to login to ICUE",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I search a member",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Go to Member Summary",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "Validate Field Values",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "Validate Other Values",
  "keyword": "And ",
  "line": 13
});
formatter.match({
  "location": "MemSummary.i_want_to_login_to_ICUE()"
});
formatter.result({
  "duration": 51214005348,
  "status": "passed"
});
formatter.match({
  "location": "MemSummary.i_search_a_member()"
});
formatter.result({
  "duration": 101329,
  "status": "passed"
});
formatter.match({
  "location": "MemSummary.go_to_Member_Summary()"
});
formatter.result({
  "duration": 5311023102,
  "status": "passed"
});
formatter.match({
  "location": "MemSummary.validate_Field_Values()"
});
formatter.result({
  "duration": 1863187790,
  "status": "passed"
});
formatter.match({
  "location": "MemSummary.validate_Other_Values()"
});
formatter.result({
  "duration": 3941262934,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[3]/form/table/tbody/tr/td[1]/ul/li[1]\"}\nCommand duration or timeout: 42 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.30.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/div[3]/form/table/tbody/tr/td[1]/ul/li[1]}\nSession ID: 612f69fc-6aa5-4326-a614-96102415dc3b\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d45.8.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat C3.C3Testing.MemSummary.validate_Other_Values(MemSummary.java:122)\r\n\tat ✽.And Validate Other Values(MemberSummary.feature:13)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[3]/form/table/tbody/tr/td[1]/ul/li[1]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.30.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous2982006856237811513webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous2982006856237811513webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous2982006856237811513webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous2982006856237811513webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous2982006856237811513webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n"
});
formatter.scenario({
  "id": "member-summary;member-summary-configuration-page",
  "description": "",
  "name": "Member Summary Configuration Page",
  "keyword": "Scenario",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "I am on Member Summary Page",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "Add new Preference",
  "keyword": "When ",
  "line": 17
});
formatter.step({
  "name": "Validate preference in Member Summary",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "location": "MemSummary.i_am_on_Member_Summary_Page()"
});
formatter.result({
  "duration": 40954214059,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div/form/div[3]/div/div/div/div/div[1]/div[2]/div/div/table/tbody/tr[1]/td[2]/div\"}\nCommand duration or timeout: 42 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.30.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/div/form/div[3]/div/div/div/div/div[1]/div[2]/div/div/table/tbody/tr[1]/td[2]/div}\nSession ID: a10a0555-2093-4e13-823d-147ae1d34a8a\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d45.8.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat C3.C3Testing.TestingExcel.ExcelTest(TestingExcel.java:35)\r\n\tat C3.C3Testing.MemSummary.i_am_on_Member_Summary_Page(MemSummary.java:138)\r\n\tat ✽.Given I am on Member Summary Page(MemberSummary.feature:16)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div/form/div[3]/div/div/div/div/div[1]/div[2]/div/div/table/tbody/tr[1]/td[2]/div\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.30.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1348436653266931055webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1348436653266931055webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1348436653266931055webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1348436653266931055webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1348436653266931055webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n"
});
formatter.match({
  "location": "MemSummary.add_new_Preference()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemSummary.validate_preference_in_Member_Summary()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Testing4.feature");
formatter.feature({
  "id": "qualathon",
  "tags": [
    {
      "name": "@smoke",
      "line": 3
    }
  ],
  "description": "",
  "name": "QualAThon",
  "keyword": "Feature",
  "line": 4,
  "comments": [
    {
      "value": "#Author: your.email@your.domain.com",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "qualathon;qualathon-member-summary",
  "description": "",
  "name": "QualAThon Member Summary",
  "keyword": "Scenario",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "I want to login to ICUE Master",
  "keyword": "Given ",
  "line": 7
});
formatter.step({
  "name": "Navigate to Member Summary and Validate all Components",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "Validate Preference",
  "keyword": "Then ",
  "line": 9
});
formatter.match({
  "location": "QualAThon.i_want_to_login_to_ICUE_Master()"
});
formatter.result({
  "duration": 43660611185,
  "status": "passed"
});
formatter.match({
  "location": "QualAThon.navigate_to_Member_Summary_and_Validate_all_Components()"
});
formatter.result({
  "duration": 3436602252,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[2]/form/table[1]/thead/tr/th/div[2]/div/select/option[2]\"}\nCommand duration or timeout: 3.21 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.30.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/div[2]/form/table[1]/thead/tr/th/div[2]/div/select/option[2]}\nSession ID: 4a659c2c-a785-4446-ac45-b02aeb34659c\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d45.8.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat C3.C3Testing.QualAThon.navigate_to_Member_Summary_and_Validate_all_Components(QualAThon.java:26)\r\n\tat ✽.When Navigate to Member Summary and Validate all Components(Testing4.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[2]/form/table[1]/thead/tr/th/div[2]/div/select/option[2]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.30.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1935785623071106809webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1935785623071106809webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1935785623071106809webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1935785623071106809webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous1935785623071106809webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n"
});
formatter.match({
  "location": "QualAThon.validate_Preference()"
});
formatter.result({
  "status": "skipped"
});
});