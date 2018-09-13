@applicantsCA
Feature: Applicants (Compliance Admin)

Background:
Given I login as a 'Compliance Admin'
When I accept the cookie banner
Then I am logged in

Scenario Outline: Filter Applicants
When I click the 'Applicants Compliance Admin' option
And filter by <status> Applicants
Then Applicant records at <status> status are displayed

Examples:
| status |
| "Completed" |
| "New" |
| "Scheduled" |
| "Signed Up" |
| "To Schedule" |

Scenario: Search for Applicant record
When I click the 'Applicants Compliance Admin' option
And I search for the "editable applicant" applicant CA record
Then the "Editable Applicant" is returned within the applicant search results
