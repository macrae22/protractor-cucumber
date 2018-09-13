import { element, by, browser, ExpectedConditions } from "protractor/built";

export default class ApplicantProgrammeDetailsModel {

    private readonly elements = {
        //selectFirstProgrammeRadioButton: element(by.css('label > span > span.radioElement')),
        selectProgrammeRadioButtons: element.all(by.css('.radioElement')),
        cancelCTA: element(by.css('span.primaryColour'))
    };

    public async isOnPage() {
        // Waits for the URL to contain '/candidate-overview' before checking page title

        await browser.wait(ExpectedConditions.urlContains('/edit/programme'), 10000);
        return (await browser.getTitle()) === "Edit programme";
    }

    //basicPersonalDetailsRadioButtons
    public async setProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectProgrammeRadioButtons.get(1)), 10000);
        await this.elements.selectProgrammeRadioButtons.get(1).click();
        return this;
    }

    //NEED TO ADD HOW WE DEAL WHEN SELECTING A STANDARD PROGRAMME WHICH DISPLAYS THE ADDITIONAL RADIO BUTTONS "Is the EPA Organisation Known?"

    //cancelCTA:
    public async clickCancel() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.cancelCTA), 10000);
        await this.elements.cancelCTA.click();
        await browser.wait(ExpectedConditions.not(ExpectedConditions.urlContains('/edit/programme')));
    }

    public async completeProgrammeDetails_Section() {
        await this.setProgramme();
    }
}
