const { When } = require("cucumber");
import { SetLearningPlanExceptionsPage } from "../../../../pages/applicants/pages/applicantSignUp/setLearningPlanExceptions";

When(/^I select the 'Programme Start Date' option$/, SetLearningPlanExceptionsPage.clickProgrammeStartDate);
