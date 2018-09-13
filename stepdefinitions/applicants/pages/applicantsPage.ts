const { When, Then } = require("cucumber");
import { ApplicantsPage } from "../../../pages/applicants/pages/applicantsPage";

When(/^filter by "(.*)" Applicants$/, ApplicantsPage.clickFilter);

When(/^I search for the "(.*)" applicant record$/, ApplicantsPage.searchFor);

When(/^I search for the "(.*)" applicant CA record$/, ApplicantsPage.searchCAFor);

When(/^I view the "(.*)" applicant record$/, ApplicantsPage.viewSpecificApplicant);

Then(/^Applicant records at "(.*)" status are displayed$/, ApplicantsPage.hasRecordsWithStatus);

Then(/^the "(.*)" is returned within the applicant search results$/, ApplicantsPage.hasCandidateLink);
