$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testing4.feature");
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
  "duration": 54172835373,
  "status": "passed"
});
formatter.match({
  "location": "QualAThon.navigate_to_Member_Summary_and_Validate_all_Components()"
});
formatter.result({
  "duration": 3253489255,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[2]/form/table[1]/thead/tr/th/div[2]/div/select/option[2]\"}\nCommand duration or timeout: 3.02 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.30.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[2]/div[2]/form/table[1]/thead/tr/th/div[2]/div/select/option[2]}\nSession ID: 3478548c-f2d2-4cb5-b40e-bc2b8b68ef33\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d45.8.0}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat C3.C3Testing.QualAThon.navigate_to_Member_Summary_and_Validate_all_Components(QualAThon.java:26)\r\n\tat ✽.When Navigate to Member Summary and Validate all Components(Testing4.feature:8)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[2]/div[2]/form/table[1]/thead/tr/th/div[2]/div/select/option[2]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027LH7U05CG6302VSS\u0027, ip: \u002710.228.30.104\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_71\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous961572333009697916webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous961572333009697916webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10779)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous961572333009697916webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12661)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous961572333009697916webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12666)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/ssankhe1/AppData/Local/Temp/anonymous961572333009697916webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12608)\r\n"
});
formatter.match({
  "location": "QualAThon.validate_Preference()"
});
formatter.result({
  "status": "skipped"
});
});