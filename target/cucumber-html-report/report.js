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
  "duration": 15468782061,
  "status": "passed"
});
formatter.match({
  "location": "newfeature.notes_can_be_created()"
});
formatter.result({
  "duration": 7844188236,
  "status": "passed"
});
formatter.match({
  "location": "newfeature.validate_notes()"
});
formatter.result({
  "duration": 2523695228,
  "status": "passed"
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
  "duration": 11215023680,
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
  "duration": 2651260930,
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
  "duration": 20711031573,
  "status": "passed"
});
});