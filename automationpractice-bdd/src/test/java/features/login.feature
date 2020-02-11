
Feature: Login feature
  @SmokeTest
  Scenario: Login with invalid credentials
    #Steps --> Given When Then
    Given User need to be in the sign in page
    When Login in with invalid email and password
    Then User shall not be allowed to login, error message shown
