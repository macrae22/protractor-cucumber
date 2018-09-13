import { LearnerActivityPage } from '../../../pages/learners/pages/learnerActivityPage';

const { When } = require("cucumber");

When(/^I select the 'View Assessment' CTA$/, LearnerActivityPage.clickViewAssessmentButton);
