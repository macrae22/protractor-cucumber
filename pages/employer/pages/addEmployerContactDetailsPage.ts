import { element, by, browser, ExpectedConditions } from "protractor/built";

export default class AddEmployerContactDetailsPage {
    private readonly elements = {
        firstNameField: element(by.css('input[formcontrolname="firstName"]')),
        lastNameField: element(by.css('input[formcontrolname="lastName"]')),
        jobRolefield: element(by.css('input[formcontrolname="jobRole"]')),
        phoneNumberField: element(by.css('input[formcontrolname="phone"]')),
        emailAddressField: element(by.css('input[formcontrolname="email"]'))
    };

    public async enterFirsname() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.firstNameField), 10000);
        await this.elements.firstNameField.sendKeys('Daenerys');
        return this;
    }

    public async enterLastName() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.lastNameField), 10000);
        await this.elements.lastNameField.sendKeys('Targaryen');
        return this;
    }

    public async enterJobRole() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.jobRolefield), 10000);
        await this.elements.jobRolefield.sendKeys('Mother of dragons');
        return this;
    }

    public async enterPhoneNumber() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.phoneNumberField), 10000);
        await this.elements.phoneNumberField.sendKeys('07795111555');
        return this;
    }

    public async enterEmailAddress() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.emailAddressField), 10000);
        await this.elements.emailAddressField.sendKeys('daenerys.targaryen@automationtest.com');
        return this;
    }

    public async addEmployerContactDetails() {
        await this.enterFirsname();
        await this.enterLastName();
        await this.enterJobRole();
        await this.enterPhoneNumber();
        await this.enterEmailAddress();
    }
}
