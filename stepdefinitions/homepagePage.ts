import { HomepagePage } from '../pages/homepage/homepagePage';

const { When } = require("cucumber");

When(/^I click the 'Dashboard' option$/, HomepagePage.clickDashboardLink);

When(/^I click the 'Programmes' option$/, HomepagePage.clickProgrammesLink);

When(/^I click the 'Applicants' option$/, HomepagePage.clickApplicantsLink);

When(/^I click the 'Applicants Compliance Admin' option$/, HomepagePage.clickApplicantsCALink);

When(/^I click the 'Employers' option$/, HomepagePage.clickEmployerLink);

When(/^I click the 'Trainers' option$/, HomepagePage.clickTrainersLink);

When(/^I click the 'Learners' option$/, HomepagePage.clickLearnersLink);

When(/^I click the 'Learner Admin' option$/, HomepagePage.clickLearnerAdminLink);
