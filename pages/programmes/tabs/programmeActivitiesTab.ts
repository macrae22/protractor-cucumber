import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export default class ProgrammeActivitiesTab {

    private readonly elements = {
        saveButton: element(by.css('button.btn'))
    };

    //Cannot use this method as the 'title' currently uses the URL of the page
    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/activities'));
        return (await browser.getTitle()) === "Activities";
    }

    public async clickSave() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.saveButton), 10000);
        await this.elements.saveButton.click();
        await WaitFor.buttonLoadSpinner();
        return this;
    }

}
