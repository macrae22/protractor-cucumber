import { EmployerRecordPage } from "../../../pages/employer/pages/employerRecordPage";

const { When } = require("cucumber");

When(/^I edit the 'Overview' section$/, EmployerRecordPage.clickEditOverview);

When(/^I edit the first 'Employer contact details' section$/, EmployerRecordPage.clickFirstEditEmployerContactDetails);

When(/^I edit the 'Additional information' section$/, EmployerRecordPage.clickEditAdditionalInformation);
