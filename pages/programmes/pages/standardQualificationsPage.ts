import { ExpectedConditions, browser, by, element } from "protractor/built";
import { WaitFor } from "../../general/waitFor";
import ProgrammeRecordPage from "./programmeRecordPage";

export default class StandardQualificationsPage {
    private readonly elements = {
        qualificationResults: element.all(by.css('.checkboxElement'))
    };

    public async isOnPage() {
        return (await browser.getTitle()) === "Select standard qualifications";
    }

    public async selectQualificationResult() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.qualificationResults.get(0)), 10000);
        await this.elements.qualificationResults.get(0).click();
        return this;
    }

    public async clickConfirmAndCreateProgramme() {
        await WaitFor.buttonLoadSpinner();
        await WaitFor.loadSpinner();
        return this;
    }

    public async chooseQualifications() {
        await this.selectQualificationResult();
        await this.clickConfirmAndCreateProgramme();
        return new ProgrammeRecordPage;
    }
}
