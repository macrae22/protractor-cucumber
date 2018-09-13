const { When } = require("cucumber");
import { ApplicantDocumentsPage } from "../../../pages/applicants/pages/applicantDocumentsPage";

When(/^I view the 'Application Summary' snapshot$/, ApplicantDocumentsPage.clickApplicationSummary);

When(/^I view the 'Commitment Statement' snapshot$/, ApplicantDocumentsPage.clickCommitmentStatement);

When(/^I view the 'Funding' snapshot$/, ApplicantDocumentsPage.clickFunding);

When(/^I view the 'Additional Learning Support' snapshot$/, ApplicantDocumentsPage.clickAdditionalLearningSupport);
