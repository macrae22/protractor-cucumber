@learningportal
Feature: Learning Portal

Background:
Given I login as a 'learner'
When I accept the cookie banner
Then the learner is logged in

Scenario: Apprentice can view an Activity
When I view an activity record
Then the "Learning Portal: Activity summary" page is displayed

Scenario: Apprentice can view an Activity
And I select the 'Confirm Submission' CTA
And I select the 'View Assessment' CTA
Then the "Learning Portal: Assessment feedback" page is displayed
And I click the 'Close' CTA
Then the "Learning Portal: Activity submissions" page is displayed
