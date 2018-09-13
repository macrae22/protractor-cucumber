import { element, by, browser, ExpectedConditions } from "protractor/built";
import StandardQualificationsPage from "./standardQualificationsPage";
import { WaitFor } from "../../general/waitFor";

export default class ApprenticeshipStandardPage {

    private readonly elements = {
        selectStandardSearchField: element(by.css('input[name*="query"]')),
        searchButton: element(by.css('button.btn.search')),
        programmeResult: element(by.cssContainingText('a[href*="#"]', 'Lead Adult Care Worker'))
    };

    public async enterProgrammeName() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectStandardSearchField));
        await this.elements.selectStandardSearchField.sendKeys('Lead Adult Care Worker');
        return this;
    }

    public async clickSearch() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.searchButton));
        await this.elements.searchButton.click();
        await WaitFor.loadSpinner();
        return this;
    }

    public async selectProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.programmeResult));
        await this.elements.programmeResult.click();
        await WaitFor.loadSpinner();
        return new StandardQualificationsPage;
    }

    public async chooseProgramme() {
        await this.enterProgrammeName();
        await this.clickSearch();
        await this.selectProgramme();
        return new StandardQualificationsPage;
    }
}
