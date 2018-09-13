import { element, by, browser, ExpectedConditions } from "protractor/built";
import ApplicantDetailsModel from "../models/applicantDetailsModel";

export default class ApplicantSelectEmployerContact {

    private readonly elements = {
        selectEmployerContactButtons: element.all(by.css('button.btn.btn-md.secondary.selectContactButton')),
        nextButton: element(by.css('.btn.btn-md[type*="button"]'))
    };

    public async selectEmployerContact() {
        //Wait for and select first Employer Contact from results
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectEmployerContactButtons.get(0)), 10000);
        await this.elements.selectEmployerContactButtons.get(0).click();
        return this;
    }

    public async clickNext() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.nextButton), 10000);
        await this.elements.nextButton.click();
        return new ApplicantDetailsModel;
    }

    public async completeEmployerContactPage() {
        await this.selectEmployerContact();
        await this.clickNext();
        return new ApplicantDetailsModel;
    }

}
