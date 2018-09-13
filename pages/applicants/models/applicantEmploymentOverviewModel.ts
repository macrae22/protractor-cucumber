import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export default class ApplicantEmploymentOverviewModel {
    private readonly elements = {
        employmentRadioButtons: element.all(by.css('.form-check-label')),
        whatIsJobRole: element(by.css('input[formcontrolname*="jobRole"]')),
        lengthOfEmployment: element(by.css('input[formcontrolname*="lengthOfEmployment"]')),
        cancelCTA: element(by.css('span.primaryColour'))
    };

    public async isOnPage() {
        // Waits for the URL to contain '/candidate-overview' before checking page title
        await browser.wait(ExpectedConditions.urlContains('/edit/employment'), 10000);
        (await browser.getTitle()) === "Edit employment details";
    }

    //How many hours does this learner normally work per week?
    public async selectNotSure() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employmentRadioButtons.get(0)), 10000);
        await this.elements.employmentRadioButtons.get(0).click();
        return this;
    }
    public async selectLessThan16hrs() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employmentRadioButtons.get(1)), 10000);
        await this.elements.employmentRadioButtons.get(1).click();
        return this;
    }
    public async selectBetween16hrs29hrs() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employmentRadioButtons.get(2)), 10000);
        await this.elements.employmentRadioButtons.get(2).click();
        return this;
    }
    public async select30HrsAndOver() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employmentRadioButtons.get(3)), 10000);
        await this.elements.employmentRadioButtons.get(3).click();
        return this;
    }

    //What job role does the applicant have?
    public async selectNewJobRole() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employmentRadioButtons.get(4)), 10000);
        await this.elements.employmentRadioButtons.get(4).click();
        return this;
    }
    public async selectExistingJobRole() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.employmentRadioButtons.get(5)), 10000);
        await this.elements.employmentRadioButtons.get(5).click();
        return this;
    }
    //What is the job role of the applicant?
    public async enterJobRole() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.whatIsJobRole), 10000);
        await this.elements.whatIsJobRole.clear();
        await this.elements.whatIsJobRole.sendKeys('Automator');
        return this;
    }
    //Length of employment in months?
    public async enterLengthEmployment() {
        //Wait for and enter 'Length of employment in months?'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.lengthOfEmployment), 10000);
        await this.elements.lengthOfEmployment.clear();
        await this.elements.lengthOfEmployment.sendKeys('8');
        return this;
    }

    //cancelCTA:
    public async clickCancel() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.cancelCTA), 10000);
        await this.elements.cancelCTA.click();
        await WaitFor.urlToNotContain('/edit/employment');
    }

    public async completeEmploymentOverview() {
        await this.select30HrsAndOver();
        await this.selectNewJobRole();
        await this.enterJobRole();
        await this.enterLengthEmployment();
    }
}
