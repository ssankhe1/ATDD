$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("New.feature");
formatter.feature({
  "id": "this-is-a-new-feature",
  "tags": [
    {
      "name": "@smoke",
      "line": 4
    }
  ],
  "description": "",
  "name": "This is a new feature",
  "keyword": "Feature",
  "line": 5,
  "comments": [
    {
      "value": "#Author: sourabh sankhe",
      "line": 1
    },
    {
      "value": "#Sample Feature Definition Template",
      "line": 2
    },
    {
      "value": "#checking Commit",
      "line": 3
    }
  ]
});
formatter.scenario({
  "id": "this-is-a-new-feature;this-is-a-new-scenario",
  "tags": [
    {
      "name": "@smoke",
      "line": 7
    }
  ],
  "description": "",
  "name": "This is a new scenario",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I want to Open Alpha, Notes",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "Notes can be created",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "validate notes",
  "keyword": "Then ",
  "line": 11
});
formatter.match({
  "location": "newfeature.i_want_to_Open_Alpha_Notes()"
});
formatter.result({
  "duration": 15821266489,
  "status": "passed"
});
formatter.match({
  "location": "newfeature.notes_can_be_created()"
});
formatter.result({
  "duration": 10268310302,
  "status": "passed"
});
formatter.match({
  "location": "newfeature.validate_notes()"
});
formatter.result({
  "duration": 2634446616,
  "status": "passed"
});
});