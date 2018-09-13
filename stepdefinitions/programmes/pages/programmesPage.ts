import { element, by } from "protractor";
import programmesPage from "../../../pages/programmes/pages/programmesPage";
import { expect } from 'chai';

const { When, Then } = require("cucumber");

const ProgrammesPage: programmesPage = new programmesPage();

When(/^filter by 'Draft' Programmes$/, async () => {
    await ProgrammesPage.filterByDraft();
});

When(/^filter by 'Awaiting Approval' Programmes$/, async () => {
    await ProgrammesPage.filterByAwaitingApproval();
});

When(/^filter by 'Published' Programmes$/, async () => {
    await ProgrammesPage.filterByPublished();
});

When(/^filter by 'Archived' Programmes$/, async () => {
    await ProgrammesPage.filterByArchived();
});

When(/^I click the 'New Programme' CTA$/, async () => {
    await ProgrammesPage.clickNewProgramme();
});

When(/^I edit a Programme$/, async () => {
    await ProgrammesPage.editProgramme();
});

When(/^I view the "(.*)" Programme$/, async (programmeName: string) => {
    await ProgrammesPage.viewSpecificProgramme(programmeName);
});

Then(/^Programme records at "(.*)" status are displayed$/, async (status: string) =>
    //Need to add this into Page Object
    expect(await element.all(by.css(".status-container")).get(0).getText()).to.equal(status));
