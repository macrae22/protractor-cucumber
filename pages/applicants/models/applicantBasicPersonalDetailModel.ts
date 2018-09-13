import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export default class ApplicantBasicPersonalDetailsModel {
    private readonly elements = {
        titleField: element(by.css('select[formcontrolname*="title"]')),
        firstNameField: element(by.css('input[formcontrolname*="foreName"]')),
        middleNamesField: element(by.css('input[formcontrolname*="middleNames"]')),
        lastNameField: element(by.css('input[formcontrolname*="surname"]')),
        dateOfBirth: element(by.css('input[placeholder*="dd/mm/yyyy"]')),
        basicPersonalDetailsRadioButtons: element.all(by.css('.form-check-label')),
        emailAddressField: element(by.css('input[formcontrolname*="email"]')),
        mobileField: element(by.css('input[formcontrolname*="mobile"]')),
        cancelCTA: element(by.css('span.primaryColour')),
        titleOptions: element.all(by.css('select[formcontrolname="title"] > option'))
    };

    public async isOnPage() {
        // Waits for the URL to contain url before checking page title
        await browser.wait(ExpectedConditions.urlContains('/edit/basicdetails'), 10000);
        return (await browser.getTitle()) === "Edit personal details";
    }

    private async setTitle(option: number) {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.titleField), 10000);
        await this.elements.titleOptions.get(option).click();
        return this;
    }

    public async editFirstName() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.firstNameField), 10000);
        await this.elements.firstNameField.clear();
        await this.elements.firstNameField.sendKeys(`${new Date().toUTCString()}`);
        return this;
    }

    public async editMiddleName() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.middleNamesField), 10000);
        await this.elements.middleNamesField.clear();
        await this.elements.middleNamesField.sendKeys('QA');
        return this;
    }

    public async editLastName() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.lastNameField), 10000);
        await this.elements.lastNameField.clear();
        await this.elements.lastNameField.sendKeys('Edited');
        return this;
    }

    //dateOfBirth
    public async enterDateOfBirth() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.dateOfBirth), 10000);
        //await this.elements.dateOfBirth.clear;
        await this.elements.dateOfBirth.sendKeys('05121990');
        return this;
    }

    //basicPersonalDetailsRadioButtons
    public async setGenderFemale() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.basicPersonalDetailsRadioButtons.get(0)), 10000);
        await this.elements.basicPersonalDetailsRadioButtons.get(0).click();
        return this;
    }
    public async setGenderMale() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.basicPersonalDetailsRadioButtons.get(1)), 10000);
        await this.elements.basicPersonalDetailsRadioButtons.get(1).click();
        return this;
    }

    //emailAddressField
    public async editEmailaddress() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.emailAddressField), 10000);
        await this.elements.emailAddressField.clear();
        await this.elements.emailAddressField.sendKeys(`${Math.floor(Math.random() * 10000) + 1}@editedsmoketests.com`);
        return this;
    }

    //mobileField
    public async editMobileField() {

        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.mobileField), 10000);
        await this.elements.mobileField.clear();
        await this.elements.mobileField.sendKeys('07787654321');
        return this;
    }

    public async setResidencyNotSure() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.basicPersonalDetailsRadioButtons.get(2)), 10000);
        await this.elements.basicPersonalDetailsRadioButtons.get(2).click();
        return this;
    }
    public async setResidencyYes() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.basicPersonalDetailsRadioButtons.get(3)), 10000);
        await this.elements.basicPersonalDetailsRadioButtons.get(3).click();
        return this;
    }
    public async setResidencyNo() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.basicPersonalDetailsRadioButtons.get(4)), 10000);
        await this.elements.basicPersonalDetailsRadioButtons.get(4).click();
        return this;
    }

    //cancelCTA:
    public async clickCancel() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.cancelCTA), 10000);
        await this.elements.cancelCTA.click();
        await WaitFor.urlToNotContain('/edit/basicdetails');
    }

    public async completeBasicPersonalDetails_Section() {
        await this.setTitle(1); //Mr
        await this.editFirstName();
        await this.editMiddleName();
        await this.editLastName();
        await this.enterDateOfBirth();
        await this.setGenderMale();
        await this.editEmailaddress();
        await this.editMobileField();
        await this.setResidencyYes();
    }
}
