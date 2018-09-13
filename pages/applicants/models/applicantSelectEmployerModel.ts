import { ExpectedConditions, browser, by, element } from "protractor/built";
import ApplicantSelectEmployerContactModel from "../models/applicantSelectEmployerContactModel";

export default class ApplicantSelectEmployer {

    private readonly elements = {
        selectEmployerRadioButtons: element.all(by.css('button.btn.secondary.pull-right')),
        nextButton: element(by.css('.btn.btn-md[type*="button"]'))
    };

    public async selectEmployer() {
        //Wait for and select first Employer from results
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectEmployerRadioButtons.get(0)), 10000);
        await this.elements.selectEmployerRadioButtons.get(0).click();
        return new ApplicantSelectEmployerContactModel;
    }

}
