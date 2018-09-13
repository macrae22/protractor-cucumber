import { learningOverviewPage } from "../../../pages/learningPortal/pages/learningOverviewPage";

const { Then, When } = require("cucumber");

Then(/^the learner is logged in$/, learningOverviewPage.isLoggedIn);

When(/^I view an activity record$/, learningOverviewPage.viewActivity);

When(/^I select the 'Confirm Submission' CTA$/, learningOverviewPage.clickConfirmSubmissionButton);
