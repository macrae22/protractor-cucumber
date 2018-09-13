import { element, by, browser, ExpectedConditions } from "protractor/built";
import * as path from "path";

export default class AddEmployerWrittenAgreementEvidencePage {
    private readonly elements = {
        nameOfInsurerField: element(by.css('input[formcontrolname="insurerName"]')),
        certificateNumberField: element(by.css('input[formcontrolname="certificateNumber"]')),
        datePickersFields: element.all(by.css('input[placeholder*="dd/mm/yyyy"]')),
        uploadButtons: element.all(by.css('input[type="file"]')).last(),
        removeButtons: element.all(by.css('span.fa.fa-trash')).last()
    };

    public async enterStartDate() {
        //Wait for and select the 'Start Date'
        //0 = 'Start Date' picker
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.datePickersFields.get(0)), 10000);
        await this.elements.datePickersFields.get(0).sendKeys('01012017');
        return this;
    }

    public async enterExpiryDate() {
        //Wait for and select the 'Expiry Date'
        //1 = 'Expiry Date' picker
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.datePickersFields.get(1)), 10000);
        await this.elements.datePickersFields.get(1).sendKeys('01012018');
        return this;
    }

    public async uploadFile() {
        //uploads a file (and waits for the 'remove' button to appear so we know it's uploaded)
        //We get the last element for the 'Upload' & 'Remove' elements as each uploaded file within the Employer adds an additional identical element
        const fileToUpload = "../../files/test.docx";
        const absolutePath = path.resolve(__dirname, fileToUpload);

        const fileElem = this.elements.uploadButtons;
        await fileElem.sendKeys(absolutePath);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.removeButtons), 10000);
        return this;
    }

    public async addWrittenAgreementEvidence() {
        await this.enterStartDate();
        await this.enterExpiryDate();
        await this.uploadFile();
    }
}
