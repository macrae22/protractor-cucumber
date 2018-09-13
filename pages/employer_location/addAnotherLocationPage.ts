import { element, by, browser, ExpectedConditions } from "protractor/built";
import * as path from "path";

export default class AddAnotherLocationPage {
    private readonly elements = {
        postcodeField: element(by.css('input[formcontrolname="postcode"]')),
        postcodeLookupField: element(by.css('input[placeholder="e.g. SW14 5HG"]')),
        findAddressButton: element(by.css('button.btn.btn-formgroup.secondary')),
        typeOfLocationField: element(by.css('input[formcontrolname="typeOfLocation"]')),
        firstNameField: element(by.css('input[formcontrolname="firstName"]')),
        lastNameField: element(by.css('input[formcontrolname="lastName"]')),
        jobRolefield: element(by.css('input[formcontrolname="jobRole"]')),
        phoneNumberField: element(by.css('input[formcontrolname="phone"]')),
        emailAddressField: element(by.css('input[formcontrolname="email"]')),
        datePickersFields: element.all(by.css('input[placeholder*="dd/mm/yyyy"]')), //returns 2 elements
        uploadButton: element(by.css('input[type="file"]')),
        removeButton: element(by.css('span.fa.fa-trash'))
    };

    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/employer/add-location/'));
        return (await browser.getTitle()) === "Add another location";
    }

    public async postcodeLookup() {
        //Wait for and enter a 'Postcode'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.postcodeLookupField), 10000);
        await this.elements.postcodeLookupField.sendKeys('WR5 3DA');

        //Wait for and click 'Find Address' button
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.postcodeLookupField), 10000);
        await this.elements.findAddressButton.click();

        //Select an address from dropdown results
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.css('option[value="1: Object"]'))), 10000);
        await element(by.css('option[value="1: Object"]')).click();
        return this;
    }

    public async enterTypeOfLocation() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.typeOfLocationField), 10000);
        await this.elements.typeOfLocationField.sendKeys(`Location Head Office`);
        return this;
    }

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

    public async enterStartDate() {
        //Wait for and select the 'Employer liabilty insurance Start Date'
        //0 = Employer liability insurance 'Start Date' picker
        await this.elements.datePickersFields.get(0).sendKeys('01012017');
        return this;
    }

    public async enterExpiryDate() {
        //Wait for and select the 'Employer liabilty insurance Expiry Date'
        //1 = Employer liability insurance 'Expiry Date' picker
        await this.elements.datePickersFields.get(1).sendKeys('01012018');
        return this;
    }

    public async uploadFile() {
        //uploads a file (and waits for the 'remove' button to appear so we know it's uploaded)
        const fileToUpload = "../../files/test.docx";
        const absolutePath = path.resolve(__dirname, fileToUpload);

        const fileElem = this.elements.uploadButton;
        await fileElem.sendKeys(absolutePath);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.removeButton), 10000);
        return this;
    }

    public async addNewLocationDetails() {
        await this.postcodeLookup();
        await this.enterTypeOfLocation();
        await this.enterFirsname();
        await this.enterLastName();
        await this.enterJobRole();
        await this.enterPhoneNumber();
        await this.enterEmailAddress();
        await this.enterStartDate();
        await this.enterExpiryDate();
        await this.uploadFile();
    }
}
