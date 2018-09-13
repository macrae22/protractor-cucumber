import { EmployersPage } from '../../../pages/employer/pages/employersPage';

const { When, Then } = require("cucumber");

When(/^I view the "(.*)" employer record$/, EmployersPage.viewSpecificEmployer);

When(/^I search for the "(.*)" employer record$/, EmployersPage.searchFor);

Then(/^the "(.*)" is returned within the employer search results$/, EmployersPage.addressHeaderExists);
