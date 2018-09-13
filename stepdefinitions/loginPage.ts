const { Given, When, Then } = require("cucumber");
import { LoginPage } from "../pages/login/loginPage";

Given(/^I login as a 'Trainer'$/, LoginPage.loginAsTrainer);

Given(/^I login as an 'Operations Manager'$/, LoginPage.loginAsOperationsManager);

Given(/^I login as a 'Compliance Admin'$/, LoginPage.loginAsComplianceAdmin);

Given(/^I login as a 'learner'$/, LoginPage.loginAsLearner);

When(/^I accept the cookie banner$/, LoginPage.acceptCookies);

Then(/^I am logged in$/, LoginPage.isLoggedIn);
