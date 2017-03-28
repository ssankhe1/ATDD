$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MemberSummary.feature");
formatter.feature({
  "id": "member-summary",
  "tags": [
    {
      "name": "@smoke",
      "line": 3
    }
  ],
  "description": "I want to use this template for my feature file",
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
  "tags": [
    {
      "name": "@smoke",
      "line": 7
    }
  ],
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
formatter.match({
  "location": "MemSummary.i_want_to_login_to_ICUE()"
});
formatter.result({
  "duration": 46117832347,
  "status": "passed"
});
formatter.match({
  "location": "MemSummary.i_search_a_member()"
});
formatter.result({
  "duration": 93536,
  "status": "passed"
});
formatter.match({
  "location": "MemSummary.go_to_Member_Summary()"
});
formatter.result({
  "duration": 254449964,
  "status": "passed"
});
formatter.match({
  "location": "MemSummary.validate_Field_Values()"
});
formatter.result({
  "duration": 3909273582,
  "status": "passed"
});
});