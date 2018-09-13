import { LearnerAdminPage } from '../../../pages/learnerAdmin/pages/learnerAdminPage';

const { When, Then } = require("cucumber");

When(/^I select the 'View Inactive' CTA$/, LearnerAdminPage.clickInactiveButton);

When(/^I select the 'View' CTA$/, LearnerAdminPage.clickFirstViewButton);

When(/^I search for the "(.*)" learner record$/, LearnerAdminPage.searchFor);

When(/^I filter by "(.*)" learner records$/, LearnerAdminPage.filterBy);

Then(/^Learner records at "(.*)" status are displayed$/, LearnerAdminPage.searchResultsContainStatus);

Then(/^the "(.*)" learner is returned within the search results$/, LearnerAdminPage.searchResultsContainTitle);
