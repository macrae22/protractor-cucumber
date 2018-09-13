const { When } = require("cucumber");
import { ApplicantRecordPage } from "../../../pages/applicants/pages/applicantRecordPage";

When(/^I edit the 'Programme details' section$/, ApplicantRecordPage.clickEditProgrammeDetails);

When(/^I edit the 'Basic personal details' section$/, ApplicantRecordPage.clickEditBasicPersonalDetails);

When(/^I edit the 'Employer overview' section$/, ApplicantRecordPage.clickEditEmploymentOverview);

When(/^I edit the 'Qualification overview' section$/, ApplicantRecordPage.clickEditQualificationOverview);

When(/^I edit the 'Additional personal details' section$/, ApplicantRecordPage.clickEditAdditionalPersonalDetails);

When(/^I edit the 'Identity verification' section$/, ApplicantRecordPage.clickEditIdentityVerification);

When(/^I edit the 'Support & access requirements' section$/, ApplicantRecordPage.clickEditSupportAndAccessRequirements);

When(/^I edit the 'Employer details' section$/, ApplicantRecordPage.clickEditEmployerDetails);

When(/^I edit the 'Qualification details' section$/, ApplicantRecordPage.clickEditQualificationDetails);

When(/^I edit the 'Written statement' section$/, ApplicantRecordPage.clickEditWrittenStatement);

When(/^I edit the 'Learning style assessment outcome' section$/, ApplicantRecordPage.clickEditLearningStyleAssessmentOutcome);

When(/^I select the 'Edit Meeting' option$/, ApplicantRecordPage.clickEditMeeting);

When(/^I select the 'Applicant Summary' option$/, ApplicantRecordPage.clickApplicantSummary);
