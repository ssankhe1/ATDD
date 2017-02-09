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
      "value": "#Then: To observe outcomes or validations",
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
  "duration": 17785951683,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_complete_action()"
});
formatter.result({
  "duration": 16726103725,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 1724443174,
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
  "duration": 12410421275,
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
  "duration": 3135639345,
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
  "duration": 29795809978,
  "status": "passed"
});
});