import programmeRecordPage from "../../../pages/programmes/pages/programmeRecordPage";

const { When } = require("cucumber");

const ProgrammesRecordPage: programmeRecordPage = new programmeRecordPage();

When(/^I select the 'Standard' tab$/, async () => {
    await ProgrammesRecordPage.clickStandardTab();
});

When(/^I select the 'Qualifications' tab$/, async () => {
    await ProgrammesRecordPage.clickQualificationsTab();
});

When(/^I select the 'Functional Skills' tab$/, async () => {
    await ProgrammesRecordPage.clickFunctionalSkillsTab();
});

When(/^I select the 'Activities' tab$/, async () => {
    await ProgrammesRecordPage.clickActivitiesTab();
});
