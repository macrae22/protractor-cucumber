Feature: Login

Background:
Given I login as a 'Trainer'
When I accept the cookie banner

Scenario: Login to bud as a 'Trainer'
Then I am logged in
