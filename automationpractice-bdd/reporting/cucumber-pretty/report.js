$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3910289728,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#Steps --\u003e Given When Then"
    }
  ],
  "line": 6,
  "name": "User need to be in the sign in page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Login in with invalid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User shall not be allowed to login, error message shown",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_need_to_be_in_the_sign_in_page()"
});
formatter.result({
  "duration": 1210063682,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.login_in_with_invalid_email_and_password()"
});
formatter.result({
  "duration": 972194331,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_shall_not_be_allowed_to_login_error_message_shown()"
});
formatter.result({
  "duration": 30575141,
  "status": "passed"
});
formatter.after({
  "duration": 86171550,
  "status": "passed"
});
formatter.uri("login_data_table.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2842144590,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 5,
      "value": "#When   Enter invalid email and password"
    }
  ],
  "line": 6,
  "name": "Enter invalid email and password from Data Table",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "testdat@gmail.com",
        "testdata"
      ],
      "line": 8
    },
    {
      "cells": [
        "testabc@gmail.com",
        "testabc"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Error message appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUsingDataTable.user_is_in_login_page()"
});
formatter.result({
  "duration": 1070123338,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingDataTable.enter_invalid_email_and_password_from_Data_Table(DataTable)"
});
formatter.result({
  "duration": 962461761,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingDataTable.error_message_appear()"
});
formatter.result({
  "duration": 35523670,
  "status": "passed"
});
formatter.after({
  "duration": 75507435,
  "status": "passed"
});
formatter.uri("login_using_scenerio_outline.feature");
formatter.feature({
  "line": 1,
  "name": "Login login_using_scenerio_outline",
  "description": "",
  "id": "login-login-using-scenerio-outline",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-login-using-scenerio-outline;login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User has to be in log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Try log in by invalid \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Unable to log in",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "login-login-using-scenerio-outline;login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 8,
      "id": "login-login-using-scenerio-outline;login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "MrABCD"
      ],
      "line": 9,
      "id": "login-login-using-scenerio-outline;login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "mrsabcd@gmail.com",
        "MrsABCD"
      ],
      "line": 10,
      "id": "login-login-using-scenerio-outline;login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "xyz@gmail.com",
        "xyz"
      ],
      "line": 11,
      "id": "login-login-using-scenerio-outline;login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2662402790,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-login-using-scenerio-outline;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User has to be in log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Try log in by invalid \"abcd@gmail.com\" and \"MrABCD\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Unable to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUsingScenerioOutline.user_has_to_be_in_log_in_page()"
});
formatter.result({
  "duration": 980419523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 23
    },
    {
      "val": "MrABCD",
      "offset": 44
    }
  ],
  "location": "LoginUsingScenerioOutline.try_log_in_by_invalid_and(String,String)"
});
formatter.result({
  "duration": 865505523,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingScenerioOutline.unable_to_log_in()"
});
formatter.result({
  "duration": 31722378,
  "status": "passed"
});
formatter.after({
  "duration": 82123716,
  "status": "passed"
});
formatter.before({
  "duration": 2846508487,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-login-using-scenerio-outline;login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User has to be in log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Try log in by invalid \"mrsabcd@gmail.com\" and \"MrsABCD\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Unable to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUsingScenerioOutline.user_has_to_be_in_log_in_page()"
});
formatter.result({
  "duration": 1172364868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mrsabcd@gmail.com",
      "offset": 23
    },
    {
      "val": "MrsABCD",
      "offset": 47
    }
  ],
  "location": "LoginUsingScenerioOutline.try_log_in_by_invalid_and(String,String)"
});
formatter.result({
  "duration": 925878265,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingScenerioOutline.unable_to_log_in()"
});
formatter.result({
  "duration": 29311468,
  "status": "passed"
});
formatter.after({
  "duration": 81831235,
  "status": "passed"
});
formatter.before({
  "duration": 2933234129,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-login-using-scenerio-outline;login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User has to be in log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Try log in by invalid \"xyz@gmail.com\" and \"xyz\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Unable to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginUsingScenerioOutline.user_has_to_be_in_log_in_page()"
});
formatter.result({
  "duration": 1150487960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 23
    },
    {
      "val": "xyz",
      "offset": 43
    }
  ],
  "location": "LoginUsingScenerioOutline.try_log_in_by_invalid_and(String,String)"
});
formatter.result({
  "duration": 872298985,
  "status": "passed"
});
formatter.match({
  "location": "LoginUsingScenerioOutline.unable_to_log_in()"
});
formatter.result({
  "duration": 24510977,
  "status": "passed"
});
formatter.after({
  "duration": 95808309,
  "status": "passed"
});
});