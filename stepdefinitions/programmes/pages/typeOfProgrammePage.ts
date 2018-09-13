import typeOfProgrammepage from "../../../pages/programmes/pages/typeOfProgrammePage";

const { When } = require("cucumber");

const TypeOfProgrammePage: typeOfProgrammepage = new typeOfProgrammepage();

When(/^I click the 'Select Standard' CTA$/, async () => {
    await TypeOfProgrammePage.clickStandardButton();
});
