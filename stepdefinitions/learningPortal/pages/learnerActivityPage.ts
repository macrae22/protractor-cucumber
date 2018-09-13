import { learningOverviewPage } from "../../../pages/learningPortal/pages/learningOverviewPage";

const { When } = require("cucumber");

When(/^I view the 'My Submissions' tab$/, learningOverviewPage.viewActivity);
