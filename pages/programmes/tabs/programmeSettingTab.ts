import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export default class ProgrammeSettingsTab {

    private readonly elements = {
        programmeNameField: element(by.css('input[formcontrolname*="programName"]')),
        sectorsDropdownResults: element(by.css('select[name*="sectors"]')).all(by.tagName('option')),
        suggestedDuration30hrsPlusField: element(by.css('input[formcontrolname*="standardDurationInMonthsForThirtyHourWeek"]')),
        suggestedDuration16To29hrsField: element(by.css('input[formcontrolname*="standardDurationInMonthsForSixteenToTwentyNineHourWeek"]')),
        suggestedDurationlessthan16hrsField: element(by.css('input[formcontrolname*="standardDurationInMonthsForLessThanSixteenHourWeek"]')),
        datePickerFields: element.all(by.css('input[placeholder*="dd/mm/yyyy"]')),
        programmeListPriceField: element(by.css('input[formcontrolname*="listPrice"]')),
        saveButton: element(by.css('button.btn'))
    };

    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/programme-settings'));
        return (await browser.getTitle()) === "Programme summary";
    }

    public async editProgrammeName() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.programmeNameField), 10000);
        await this.elements.programmeNameField.clear();
        await this.elements.programmeNameField.sendKeys('Edited: ' + `${Math.floor((Math.random() * 1000) + 1)}`);
        return this;
    }

    public async editSector() {
        //Select a random Sector from dropdown results
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.sectorsDropdownResults.get(0)), 10000);

        const numberOfItems = await this.elements.sectorsDropdownResults.count();
        const randomNumber = Math.floor(Math.random() * numberOfItems) + 1;

        await this.elements.sectorsDropdownResults.get(randomNumber).click();
    }

    public async editSuggestedDuration30Plushrs() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.suggestedDuration30hrsPlusField), 10000);
        // Randon month between 8 -> 15
        await this.elements.suggestedDuration30hrsPlusField.clear();
        await this.elements.suggestedDuration30hrsPlusField.sendKeys(`${Math.floor(Math.random() * 8) + 8}`);
        return this;
    }

    public async editSuggestedDuration16To29hrs() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.suggestedDuration16To29hrsField), 10000);
        // Randon month between 16 -> 19
        await this.elements.suggestedDuration16To29hrsField.clear();
        await this.elements.suggestedDuration16To29hrsField.sendKeys(`${Math.floor(Math.random() * 4) + 16}`);
        return this;
    }

    public async editsuggestedDurationlessthan16hrs() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.suggestedDurationlessthan16hrsField), 10000);
        // Randon month between 20 -> 25
        await this.elements.suggestedDurationlessthan16hrsField.clear();
        await this.elements.suggestedDurationlessthan16hrsField.sendKeys(`${Math.floor(Math.random() * 6) + 20}`);
        return this;
    }

    public async editLastDateForRegistration() {
        //Wait for the 'Last date for registration' date field to be clickable
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.datePickerFields.get(0)), 10000);
        await this.elements.datePickerFields.get(0).clear();
        await this.elements.datePickerFields.get(0).sendKeys('01012020');
        return this;
    }

    public async editLastDateForCertification() {
        //Wait for the 'Last date for certification' date field to be clickable
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.datePickerFields.get(1)), 10000);
        await this.elements.datePickerFields.get(1).clear();
        await this.elements.datePickerFields.get(1).sendKeys('01012022');
        return this;
    }

    public async editProgrammeListPrice() {
        //Enter a random price between £1000 - £1999
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.programmeListPriceField), 10000);
        await this.elements.programmeListPriceField.clear();
        await this.elements.programmeListPriceField.sendKeys(`${Math.floor((Math.random() * 1000) + 1000)}`);
        return this;
    }

    public async clickSave() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.saveButton), 10000);
        await this.elements.saveButton.click();
        await WaitFor.buttonLoadSpinner();
        return this;
    }

    public async editSettingTab() {
        //Edit all fields within the Programme 'Settings' tab
        await this.editProgrammeName();
        await this.editSector();
        await this.editSuggestedDuration30Plushrs();
        await this.editSuggestedDuration16To29hrs();
        await this.editsuggestedDurationlessthan16hrs();
        await this.editLastDateForRegistration();
        await this.editLastDateForCertification();
        await this.editProgrammeListPrice();
        await this.clickSave();
        return this;
    }

}
