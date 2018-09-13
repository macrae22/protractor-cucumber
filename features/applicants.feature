@applicants
Feature: Applicants

Background:
Given I login as a 'Trainer'
When I accept the cookie banner
Then I am logged in

Scenario Outline: Filter Applicants
When I click the 'Applicants' option
And filter by <status> Applicants
Then Applicant records at <status> status are displayed

Examples:
| status |
| "Completed" |
| "Invited" |
| "Scheduled" |
| "Signed Up" |
| "To Schedule" |

Scenario: Edit the 'Programme details' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Programme details' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Basic personal details' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Basic personal details' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Employer overview' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Employer overview' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Qualifications overview' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Qualification overview' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Additional personal details' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Additional personal details' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Identity verification' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Identity verification' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Support & access requirements' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Support & access requirements' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Employer details' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Employer details' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Qualification details' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Qualification details' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Written statement' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Written statement' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit the 'Learning style assessment outcome' section
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I edit the 'Learning style assessment outcome' section
And I click the 'Save & Close' CTA
Then the "Candidate overview" page is displayed

Scenario: Edit 'Scheduled Sign-up Meeting'
When I click the 'Applicants' option
And I view the "Editable Applicant" applicant record
And I select the 'Edit Meeting' option
And I click the 'Schedule' CTA
Then the "Candidate overview" page is displayed

Scenario: Search for Applicant record
When I click the 'Applicants' option
And I search for the "editable applicant" applicant record
Then the "Editable Applicant" is returned within the applicant search results

Scenario: 'Application Summary' snapshot can be viewed
When I click the 'Applicants' option
And I view the "Signed-up Applicant" applicant record
And I view the 'Application Summary' snapshot
Then the "Application snapshot" page is displayed

Scenario: 'Commitment Statement' snapshot can be viewed
When I click the 'Applicants' option
And I view the "Signed-up Applicant" applicant record
And I view the 'Commitment Statement' snapshot
Then the "Applicant Commitment Statement" page is displayed

Scenario: 'Funding' snapshot can be viewed
When I click the 'Applicants' option
And I view the "Signed-up Applicant" applicant record
And I view the 'Funding' snapshot
Then the "Applicant Funding" header is displayed

Scenario: 'Additional Learning Support' snapshot can be viewed
When I click the 'Applicants' option
And I view the "Signed-up Applicant" applicant record
And I view the 'Additional Learning Support' snapshot
Then the "Additional Learning Support" header is displayed

Scenario: 'Candidate Summary' page displayed
When I click the 'Applicants' option
And I view the "Scheduled Applicant" applicant record
And I select the 'Applicant Summary' option
Then the "Candidate Summary" page is displayed

Scenario: 'Step1: Set learning plan exemptions' page displayed
When I click the 'Applicants' option
And I view the "Scheduled Applicant" applicant record
And I select the 'Applicant Summary' option
And I select the 'Sign-up Applicant' option
Then the "Step 1: Set learning plan exemptions" header is displayed

Scenario: 'Step 2: Set programme start date' page displayed
When I click the 'Applicants' option
And I view the "Scheduled Applicant" applicant record
And I select the 'Applicant Summary' option
And I select the 'Sign-up Applicant' option
And I select the 'Programme Start Date' option
Then the "Step 2: Set programme start date" header is displayed

Scenario: 'Step 3: Review programme activities' page displayed
When I click the 'Applicants' option
And I view the "Scheduled Applicant" applicant record
And I select the 'Applicant Summary' option
And I select the 'Sign-up Applicant' option
And I select the 'Programme Start Date' option
And I select the 'Programme Activities' option
Then the "Step 3: Review programme activities" header is displayed
