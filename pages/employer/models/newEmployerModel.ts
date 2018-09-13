import * as path from "path";
import { browser, by, element, ExpectedConditions } from "protractor/built";

export default class newEmployerModel {
    private readonly elements = {
        companyRegisteredNameField: element(by.css('input[formcontrolname="name"]')),
        postcodeLookupField: element(by.css('input[placeholder="e.g. SW14 5HG"]')),
        findAddressButton: element(by.css('button.btn.btn-formgroup.secondary')),
        typeOfLocationField: element(by.css('input[formcontrolname="typeOfLocation"]')),
        employerFirstNameField: element(by.css('input[formcontrolname="firstName"]')),
        employerLastNameField: element(by.css('input[formcontrolname="lastName"]')),
        employerJobRoleField: element(by.css('input[formcontrolname="jobRole"]')),
        employerPhoneNumberField: element(by.css('input[formcontrolname="phone"]')),
        employerEmailAddressField: element(by.css('input[formcontrolname="email"]')),
        employerReferenceNumberField: element(by.css('input[formcontrolname="ern"]')),
        employerLevyFundedRadioButtons: element.all(by.css('.radioTitle')),
        nameOfInsurerField: element(by.css('input[formcontrolname="insurerName"]')),
        certificateNumberField: element(by.css('input[formcontrolname="certificateNumber"]')),
        datePickersFields: element.all(by.css('input[placeholder*="dd/mm/yyyy"]')),
        uploadButtons: element.all(by.css('input[type="file"]')),
        removeButtons: element.all(by.css('span.fa.fa-trash'))
    };

    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/employer'));
        return (await browser.getTitle()) === "Employers";
    }

    public async enterCompanyName() {
        //Wait for and enter 'Company Name'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.companyRegisteredNameField), 10000);
        await this.elements.companyRegisteredNameField.sendKeys(`Automation Test: ${new Date().toUTCString()}`);
        return this;
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

    public async enterTypeofLocation() {
        //Wait for and enter a 'Type of location'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.typeOfLocationField), 10000);
        await this.elements.typeOfLocationField.sendKeys('Head Office');
        return this;
    }

    public async enterEmployerFirstName() {
        //Wait for and enter a 'Employer First Name'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerFirstNameField), 10000);
        await this.elements.employerFirstNameField.sendKeys('Joe');
        return this;
    }

    public async enterEmployerLastName() {
        //Wait for and enter a 'Employer Last Name'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerLastNameField), 10000);
        await this.elements.employerLastNameField.sendKeys('Bloggs');
        return this;
    }

    public async enterEmployerJobRole() {
        //Wait for and enter a 'Employer Job Role'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerJobRoleField), 10000);
        await this.elements.employerJobRoleField.sendKeys('Builder');
        return this;
    }

    public async enterEmployerPhoneNumber() {
        //Wait for and enter a 'Employer Phone Number'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerPhoneNumberField), 10000);
        await this.elements.employerPhoneNumberField.sendKeys('07795123456');
        return this;
    }

    public async enterEmployerEmailAddress() {
        //Wait for and enter a 'Employer Email Address'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerEmailAddressField), 10000);
        await this.elements.employerEmailAddressField.sendKeys('joe.blogs@automation.co.uk');
        return this;
    }

    public async enterEmployerReferenceNumber() {
        //Wait for and enter a 'Employer Reference Number'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerReferenceNumberField), 10000);
        await this.elements.employerReferenceNumberField.sendKeys('123456789');
        return this;
    }

    public async selectEmployerLevyPayer() {
        //Wait for and select 'Yes' to 'Is the employer a levy payer'
        //0 = Yes - 1 = No
        await this.elements.employerLevyFundedRadioButtons.get(0).click();
        return this;
    }

    public async enterNameOfInsurer() {
        //Wait for and enter a 'Name of insurer/underwriter'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.nameOfInsurerField), 10000);
        await this.elements.nameOfInsurerField.sendKeys('AXA');
        return this;
    }

    public async enterCertificateNumber() {
        //Wait for and enter a 'Name of insurer/underwriter'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.certificateNumberField), 10000);
        await this.elements.certificateNumberField.sendKeys('111-222AUTOMATION');
        return this;
    }

    public async enterEmployerLiabilityInsuranceStartDate() {
        //Wait for and select the 'Employer liabilty insurance Start Date'
        //0 = Employer liability insurance 'Start Date' picker
        await this.elements.datePickersFields.get(0).sendKeys('01012017');
        return this;
    }

    public async enterEmployerLiabilityInsuranceExpiryDate() {
        //Wait for and select the 'Employer liabilty insurance Expiry Date'
        //1 = Employer liability insurance 'Expiry Date' picker
        await this.elements.datePickersFields.get(1).sendKeys('01012018');
        return this;
    }

    public async EmployerLiabilityInsuranceUploadFile() {
        //uploads a file (and waits for the 'remove' button to appear so we know it's uploaded)
        const fileToUpload = "../../files/test.docx";
        const absolutePath = path.resolve(__dirname, fileToUpload);

        const fileElem = this.elements.uploadButtons.get(0);
        await fileElem.sendKeys(absolutePath);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.removeButtons.get(0)), 10000);
        return this;
    }

    public async enterHealthAndSafetyEvidenceStartDate() {
        //Wait for and select the 'Employer liabilty insurance Start Date'
        //0 = Employer liability insurance 'Start Date' picker
        await this.elements.datePickersFields.get(2).sendKeys('01012017');
        return this;
    }

    public async enterHealthAndSafetyEvidenceExpiryDate() {
        //Wait for and select the 'Employer liabilty insurance Expiry Date'
        //1 = Employer liability insurance 'Expiry Date' picker
        await this.elements.datePickersFields.get(3).sendKeys('01012018');
        return this;
    }

    public async HealthAndSafetyEvidenceUploadFile() {
        //uploads a file (and waits for the 'remove' button to appear so we know it's uploaded)
        const fileToUpload = "../../files/test.docx";
        const absolutePath = path.resolve(__dirname, fileToUpload);

        const fileElem = this.elements.uploadButtons.get(1);
        await fileElem.sendKeys(absolutePath);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.removeButtons.get(1)), 10000);
        return this;
    }

    public async addNewEmployer() {
        //Add new employer
        await this.enterCompanyName();
        await this.postcodeLookup();
        await this.enterTypeofLocation();
        await this.enterEmployerFirstName();
        await this.enterEmployerLastName();
        await this.enterEmployerJobRole();
        await this.enterEmployerPhoneNumber();
        await this.enterEmployerEmailAddress();
        await this.enterEmployerReferenceNumber();
        await this.selectEmployerLevyPayer();
        await this.enterNameOfInsurer();
        await this.enterCertificateNumber();
        await this.enterEmployerLiabilityInsuranceStartDate();
        await this.enterEmployerLiabilityInsuranceExpiryDate();
        await this.EmployerLiabilityInsuranceUploadFile();
        await this.enterHealthAndSafetyEvidenceStartDate();
        await this.enterHealthAndSafetyEvidenceExpiryDate();
        await this.HealthAndSafetyEvidenceUploadFile();
    }
}
