@learners
Feature: Learners

Background:
Given I login as a 'Trainer'
When I accept the cookie banner
Then I am logged in

Scenario: View a Learners overview
When I click the 'Learners' option
And I view the "Signed-up Applicant" learner record
Then the "Learning Portal: Overview" page is displayed

Scenario: View a Learners 'Activity submissions'
When I click the 'Learners' option
And I view the "Signed-up Applicant" learner record
And I select the 'View Submissions' CTA
Then the "Learning Portal: Activity submissions" page is displayed

Scenario: View Activity assessment feedback
When I click the 'Learners' option
And I view the "Signed-up Applicant" learner record
And I select the 'View Submissions' CTA
And I select the 'View Assessment' CTA
Then the "Learning Portal: Assessment feedback" page is displayed

Scenario Outline: Filter Activity statuses
When I click the 'Learners' option
And I view the "Signed-up Applicant" learner record
And filter by <filter> activities
Then Activity records at <filter> status are displayed

Examples:
|filter|
|"Assessment Complete"|
|"In Progress"|
|"Complete"|
|"Overdue"|

Scenario Outline: View Learner sub-pages
When I click the 'Learners' option
And I view the "Signed-up Applicant" learner record
And I select the <menu_option> dropdown menu
And I select the <menu_item> downdown option
Then the <page_name> page is displayed

Examples:
|menu_option|menu_item|page_name|
|"Learning"|"Learning Support"|"Learning Support Overview"|
|"Learning"|"Overview"|"Learner Overview"|
|"Learning"|"Learner Progress Record"|"Learner Progress Record"|
|"Administration"|"Funding"|"Funding management"|
