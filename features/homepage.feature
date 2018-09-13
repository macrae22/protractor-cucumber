Feature: Homepage

Scenario: View the 'Programmes' page
Given I login as a 'Trainer'
When I accept the cookie banner
When I click the 'Programmes' option
Then the "List of Programmes" page is displayed

Scenario: View the 'Applicants' page
Given I login as a 'Trainer'
When I accept the cookie banner
When I click the 'Applicants' option
Then the "Manage applicants" page is displayed

Scenario: View the 'Employers' page
Given I login as a 'Trainer'
When I accept the cookie banner
When I click the 'Employers' option
Then the "Employers" page is displayed

Scenario: View the 'Trainers' page
Given I login as a 'Trainer'
When I accept the cookie banner
When I click the 'Trainers' option
Then the "Trainers" page is displayed

Scenario: View the 'Dashboard' page
Given I login as a 'Trainer'
When I accept the cookie banner
When I click the 'Dashboard' option
Then the "Dashboard" page is displayed

Scenario: View the 'Learners' page
Given I login as a 'Trainer'
When I accept the cookie banner
When I click the 'Learners' option
Then the "Learning Portal: All Learners" page is displayed

Scenario: View the 'Learner Admin' page
Given I login as an 'Operations Manager'
When I accept the cookie banner
When I click the 'Learner Admin' option
Then the "Learner Admin" page is displayed
