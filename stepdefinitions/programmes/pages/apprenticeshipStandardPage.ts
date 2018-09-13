import apprenticeshipStandardPage from "../../../pages/programmes/pages/apprenticeshipStandardPage";

const { When } = require("cucumber");

const ApprenticeshipStandardPage: apprenticeshipStandardPage = new apprenticeshipStandardPage();

When(/^I select a 'Standard' Programme$/, async () => {
    await ApprenticeshipStandardPage.chooseProgramme();
});
