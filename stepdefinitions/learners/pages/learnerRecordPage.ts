import { LearnerRecordPage } from '../../../pages/learners/pages/learnerRecordPage';

const { When, Then } = require("cucumber");

When(/^I select the 'View Submissions' CTA$/, LearnerRecordPage.clickViewSubmissionsButton);

When(/^filter by "(.*)" activities$/, async (filterName: string) =>
    LearnerRecordPage.filterBy(filterName));

When(/^I select the "(.*)" dropdown menu$/, async (option: string) =>
    LearnerRecordPage.selectDropDownToggle(option));

When(/^I select the "(.*)" downdown option$/, async (option: string) =>
    LearnerRecordPage.selectDropDownItem(option));

Then(/^Activity records at "(.*)" status are displayed$/, LearnerRecordPage.searchResultsContainStatus);
