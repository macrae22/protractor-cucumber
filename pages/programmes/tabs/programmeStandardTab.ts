import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export default class ProgrammeStandardTab {

    private readonly elements = {
        saveButton: element(by.css('button.btn'))
    };

    public async clickSave() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.saveButton), 10000);
        await this.elements.saveButton.click();
        await WaitFor.buttonLoadSpinner();
        return this;
    }
}
