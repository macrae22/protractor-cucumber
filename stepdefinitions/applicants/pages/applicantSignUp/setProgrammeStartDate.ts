const { When } = require("cucumber");
import { SetProgrammeStartDatePage } from "../../../../pages/applicants/pages/applicantSignUp/setProgrammeStartDate";

When(/^I select the 'Programme Activities' option$/, SetProgrammeStartDatePage.clickProgrammeActivities);
