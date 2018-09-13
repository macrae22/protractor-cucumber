import { by, element } from "protractor";
import programmeSettingTab from "../../../pages/programmes/tabs/programmeSettingTab";

const { When, Then } = require("cucumber");

const ProgrammesSettingTab: programmeSettingTab = new programmeSettingTab();

When(/^I click the 'Save' CTA$/, async () => {
    //General CTA which we could move out into a generic class?
    await ProgrammesSettingTab.clickSave();
});

Then(/^the 'Settings' tab is saved$/, async () => {
    //Got to be a better way to do this
    await (element(by.css('.success-container[style="opacity: 1; display: block;"]'))).isPresent();
});
