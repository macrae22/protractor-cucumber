import { element, by, browser, ExpectedConditions } from "protractor/built";
import ProgrammeStandardTab from "../tabs/programmeStandardTab";
import ProgrammeFunctionalSkillsTab from "../tabs/programmeFunctionalSkillsTab";
import ProgrammeActivitiesTab from "../tabs/programmeActivitiesTab";
import ProgrammeGapsTab from "../tabs/programmeGapsTab";
import ProgrammeConfrimTab from "../tabs/programmeConfirmTab";
import { WaitFor } from "../../general/waitFor";

export default class ProgrammeRecordPage {

    private readonly elements = {
        standardTab: element(by.cssContainingText('a.prg-options-link', 'Standard')),
        qualificationsTab: element(by.cssContainingText('a.prg-options-link', 'Qualifications')),
        functionalSkillsTab: element(by.cssContainingText('a.prg-options-link', 'Functional Skills')),
        activitiesSkillsTab: element(by.cssContainingText('a.prg-options-link', 'Activities')),
        gapsTab: element(by.cssContainingText('a.prg-options-link', 'Gaps')),
        confirmTab: element(by.cssContainingText('a.prg-options-link', 'Confirm'))
    };

    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/programme-settings'));
        return (await browser.getTitle()) === "Programme summary";
    }

    public async clickStandardTab() {
        //Wait for element to be clickable and then select element
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.standardTab), 10000);
        await this.elements.standardTab.click();
        return new ProgrammeStandardTab;
    }

    public async clickQualificationsTab() {
        //Wait for element to be clickable and then select element
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.qualificationsTab), 10000);
        await this.elements.qualificationsTab.click();
    }

    public async clickFunctionalSkillsTab() {
        //Wait for element to be clickable and then select element
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.functionalSkillsTab), 10000);
        await this.elements.functionalSkillsTab.click();
        await WaitFor.buttonLoadSpinner();
        return new ProgrammeFunctionalSkillsTab;
    }

    public async clickActivitiesTab() {
        //Wait for element to be clickable and then select element
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.activitiesSkillsTab), 10000);
        await this.elements.activitiesSkillsTab.click();
        return new ProgrammeActivitiesTab;
    }

    public async clickGapsTab() {
        //Wait for element to be clickable and then select element
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.gapsTab), 10000);
        await this.elements.gapsTab.click();
        return new ProgrammeGapsTab;
    }

    public async clickConfirmTab() {
        //Wait for element to be clickable and then select element
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.confirmTab), 10000);
        await this.elements.confirmTab.click();
        return new ProgrammeConfrimTab;
    }

}
