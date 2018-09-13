import standardQualificationsPage from "../../../pages/programmes/pages/standardQualificationsPage";

const { When } = require("cucumber");

const StandardQualificationsPage: standardQualificationsPage = new standardQualificationsPage();

When(/^I select a 'Standard' Qualification$/, async () => {
    await StandardQualificationsPage.chooseQualifications();
});
