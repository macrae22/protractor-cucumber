const { When } = require("cucumber");
import { ApplicantScheduleSignUpMeetingModel } from "../../../pages/applicants/models/applicantScheduleSignUpMeetingModel";

When(/^I click the 'Schedule' CTA$/, ApplicantScheduleSignUpMeetingModel.clickScheduleButton);
