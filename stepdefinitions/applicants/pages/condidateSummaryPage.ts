const { When } = require("cucumber");
import { CandidateSummaryPage } from "../../../pages/applicants/pages/candidateSummaryPage";

When(/^I select the 'Sign-up Applicant' option$/, CandidateSummaryPage.clickSignUpApplicant);
