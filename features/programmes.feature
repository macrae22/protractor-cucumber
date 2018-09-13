@programmes
Feature: Programmes

Background:
Given I login as a 'Trainer'
When I accept the cookie banner
Then I am logged in

Scenario: Filter 'Draft' Programmes
   When I click the 'Programmes' option
    And filter by 'Draft' Programmes
   Then Programme records at "Draft" status are displayed

Scenario: Filter 'Awaiting Approval' Programmes
   When I click the 'Programmes' option
    And filter by 'Awaiting Approval' Programmes
   Then Programme records at "Awaiting Approval" status are displayed

Scenario: Filter 'Published' Programmes
   When I click the 'Programmes' option
    And filter by 'Published' Programmes
   Then Programme records at "Published" status are displayed

Scenario: Filter 'Archived' Programmes
   When I click the 'Programmes' option
    And filter by 'Archived' Programmes
   Then Programme records at "Archived" status are displayed

@ignore
Scenario: Create 'Standard' Programme
   When I click the 'Programmes' option
    And I click the 'New Programme' CTA
    And I click the 'Select Standard' CTA
    And I select a 'Standard' Programme
    And I select a 'Standard' Qualification
   Then the "Programme summary" page is displayed

Scenario: Edit 'Standard' Programme ('Settings' tab)
    And I click the 'Programmes' option
   When I view the "Standard - Draft" Programme
    And I click the 'Save' CTA
   Then the 'Settings' tab is saved

Scenario: Edit 'Standard' Programme ('Standard' tab)
    And I click the 'Programmes' option
   When I view the "Standard - Draft" Programme
    And I select the 'Standard' tab
    And I click the 'Save' CTA
   Then the 'Standard' tab is saved

Scenario: Edit 'Standard' Programme ('Qualification' tab)
    And I click the 'Programmes' option
   When I view the "Standard - Draft" Programme
    And I select the 'Qualifications' tab
    And I click the 'Edit' CTA
    And I click the 'Save & Close' CTA
   Then the "Programme Qualifications" page is displayed

Scenario: Edit 'Standard' Programme ('Functional Skills' tab)
    And I click the 'Programmes' option
   When I view the "Standard - Draft" Programme
    And I select the 'Functional Skills' tab
    And I click the 'Edit' CTA
    And I click the 'Save & Close' CTA
   Then the "Programme Functional Skills" page is displayed

Scenario: Edit 'Standard' Programme ('Activities' tab)
    And I click the 'Programmes' option
   When I view the "Standard - Draft" Programme
    And I select the 'Activities' tab
    And I click the 'Save' CTA
   Then the 'Activities' tab is saved

Scenario: Edit 'Framework' Programme ('Settings' tab)
    And I click the 'Programmes' option
   When I view the "Framework - Draft" Programme
    And I click the 'Save' CTA
   Then the 'Settings' tab is saved

Scenario: Edit 'Framework' Programme ('Qualification' tab)
    And I click the 'Programmes' option
   When I view the "Framework - Draft" Programme
    And I select the 'Qualifications' tab
    And I click the 'Edit' CTA
    And I click the 'Save & Close' CTA
   Then the "Programme Qualifications" page is displayed

Scenario: Edit 'Framework' Programme ('Functional Skills' tab)
    And I click the 'Programmes' option
   When I view the "Framework - Draft" Programme
    And I select the 'Functional Skills' tab
    And I click the 'Edit' CTA
    And I click the 'Save & Close' CTA
   Then the "Programme Functional Skills" page is displayed
