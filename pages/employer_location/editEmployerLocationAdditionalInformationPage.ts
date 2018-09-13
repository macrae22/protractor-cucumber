import { element, by, browser, ExpectedConditions } from "protractor/built";

export default class EditEmployerLocationAdditionalInformationPage {
    private readonly elements = {
        employerReferenceNumberField: element(by.css('input[formcontrolname="ern"]')),
        employerLevyFundedRadioButtons: element.all(by.css('.radioTitle'))
    };

    public async enterEmployerReferenceNumber() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employerReferenceNumberField), 10000);
        await this.elements.employerReferenceNumberField.clear();
        await this.elements.employerReferenceNumberField.sendKeys('111111119');
        return this;
    }

    /**
     * Wait for and select 'No' to 'Is the employer a levy payer'.
     * 0 = Yes, 1 = No
     */
    public selectEmployerLevyPayer = async () =>
        this.elements.employerLevyFundedRadioButtons.get(1).click()

    public async editAdditionalInformation() {
        await this.enterEmployerReferenceNumber();
        await this.selectEmployerLevyPayer();
    }
}
