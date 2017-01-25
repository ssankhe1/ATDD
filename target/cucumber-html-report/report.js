$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Testing.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: sourabh.sankhe@optum.com"
    },
    {
      "line": 2,
      "value": "#Feature: Smoke Test ICUE Bravo"
    },
    {
      "line": 3,
      "value": "#Given: Login to ICUE"
    },
    {
      "line": 4,
      "value": "#When: Some key actions"
    },
    {
      "line": 5,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 7,
      "value": "#Sample Feature Definition"
    }
  ],
  "line": 9,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 12,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 12991993889,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_complete_action()"
});
formatter.result({
  "duration": 16944499527,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 10838564290,
  "status": "passed"
});
formatter.uri("Testing2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: sourabh.sankhe@optum.com"
    },
    {
      "line": 2,
      "value": "#Feature: Smoke Test ICUE Bravo"
    },
    {
      "line": 3,
      "value": "#Given: Login to ICUE"
    },
    {
      "line": 4,
      "value": "#When: Some key actions"
    },
    {
      "line": 5,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 7,
      "value": "#Sample Feature Definition"
    }
  ],
  "line": 9,
  "name": "Title of your feature2",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature2",
  "keyword": "Feature",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 12,
  "name": "Title of your scenario2",
  "description": "",
  "id": "title-of-your-feature2;title-of-your-scenario2",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I want to write a step with precondition2",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I complete action2",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I validate the outcomes2",
  "keyword": "Then "
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
  "duration": 10511276,
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
  "duration": 106655,
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
  "duration": 120603,
  "status": "passed"
});
});