@employers
Feature: Employers

Background:
Given I login as a 'Trainer'
When I accept the cookie banner
Then I am logged in

Scenario: Employer 'Overview' can be edited
And I click the 'Employers' option
And I search for the "Main Employer" employer record
When I view the "Main Employer" employer record
And I edit the 'Overview' section
And I click the 'Save & Close' CTA
Then the "Employer summary" page is displayed

Scenario: Employer 'Employer contact details' can be edited
And I click the 'Employers' option
And I search for the "Main Employer" employer record
When I view the "Main Employer" employer record
And I edit the first 'Employer contact details' section
And I click the 'Save & Close' CTA
Then the "Employer summary" page is displayed

Scenario: Employer 'Additional information' can be edited
And I click the 'Employers' option
And I search for the "Main Employer" employer record
When I view the "Main Employer" employer record
And I edit the 'Additional information' section
And I click the 'Save & Close' CTA
Then the "Employer summary" page is displayed

Scenario: Search for Employer record
And I click the 'Employers' option
And I search for the "Main Employer" employer record
Then the "Main Employer" is returned within the employer search results
