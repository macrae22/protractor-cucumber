import { element, by, browser, ExpectedConditions } from "protractor/built";
import * as path from "path";

export default class AddEmployerLiabilityInsuranceCertificatePage {
    private readonly elements = {
        nameOfInsurerField: element(by.css('input[formcontrolname="insurerName"]')),
        certificateNumberField: element(by.css('input[formcontrolname="certificateNumber"]')),
        datePickerFields: element.all(by.css('input[placeholder*="dd/mm/yyyy"]')),
        uploadButtons: element.all(by.css('input[type="file"]')).last(),
        removeButtons: element.all(by.css('span.fa.fa-trash')).last()
    };

    public async enterNameOfInsurer() {
        //Wait for and enter a 'Name of insurer/underwriter'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.nameOfInsurerField), 10000);
        await this.elements.nameOfInsurerField.sendKeys('Aviva');
        return this;
    }

    public async enterCertificateNumber() {
        //Wait for and enter a 'Name of insurer/underwriter'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.certificateNumberField), 10000);
        await this.elements.certificateNumberField.sendKeys('098-333AUTOMATION');
        return this;
    }

    public async enterStartDate() {
        //Wait for and select the 'Start Date'
        //0 = 'Start Date' picker
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.datePickerFields.get(0)), 10000);
        await this.elements.datePickerFields.get(0).sendKeys('01012017');
        return this;
    }

    public async enterExpiryDate() {
        //Wait for and select the 'Expiry Date'
        //1 = 'Expiry Date' picker
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.datePickerFields.get(1)), 10000);
        await this.elements.datePickerFields.get(1).sendKeys('01012018');
        return this;
    }

    public async uploadFile() {
        //uploads a file (and waits for the 'remove' button to appear so we know it's uploaded)
        const fileToUpload = "../../files/test.docx";
        const absolutePath = path.resolve(__dirname, fileToUpload);

        const fileElem = this.elements.uploadButtons;
        await fileElem.sendKeys(absolutePath);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.removeButtons), 10000);
        return this;
    }

    public async addEmployerLiabilityInsuranceCertificate() {
        await this.enterNameOfInsurer();
        await this.enterCertificateNumber();
        await this.enterStartDate();
        await this.enterExpiryDate();
        await this.uploadFile();
    }
}
