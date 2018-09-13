@learneradmin
Feature: Learner Admin

Background:
Given I login as an 'Operations Manager'
When I accept the cookie banner
Then I am logged in

Scenario: View an 'Active' Learner
When I click the 'Learner Admin' option
And I search for the "Active" learner record
And I select the 'View' CTA
Then the "Learner Overview" page is displayed

Scenario: View an 'Inactive' Learner
When I click the 'Learner Admin' option
And I select the 'View Inactive' CTA
And I search for the "Inactive" learner record
And I select the 'View' CTA
Then the "Learner Overview" page is displayed

Scenario: View the 'Inactive' Learners page
When I click the 'Learner Admin' option
And I select the 'View Inactive' CTA
Then the "Inactive Learners" page is displayed

Scenario: Search 'Active' Learners
When I click the 'Learner Admin' option
And I search for the "Active" learner record
Then the "Active Learner Test" learner is returned within the search results

Scenario: Search 'Inactive' Learners
When I click the 'Learner Admin' option
And I select the 'View Inactive' CTA
And I search for the "Inactive" learner record
Then the "Inactive Learner" learner is returned within the search results

Scenario: Filter by 'Break Requested'
When I click the 'Learner Admin' option
And I filter by "Break Requested" learner records
Then Learner records at "Break Requested" status are displayed

Scenario: Filter by 'Withdrawal Requested'
When I click the 'Learner Admin' option
And I filter by "Withdrawal Requested" learner records
Then Learner records at "Withdrawal Requested" status are displayed

Scenario: Filter by 'Withdrawn'
When I click the 'Learner Admin' option
And I filter by "Withdrawn" learner records
Then Learner records at "Withdrawn" status are displayed

Scenario: Filter by 'On Break'
When I click the 'Learner Admin' option
And I filter by "On Break" learner records
Then Learner records at "On Break" status are displayed
