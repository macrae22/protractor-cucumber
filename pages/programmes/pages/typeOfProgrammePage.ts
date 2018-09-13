import { element, by, browser, ExpectedConditions } from "protractor/built";
import ApprenticeshipStandardPage from "./apprenticeshipStandardPage";
import { WaitFor } from "../../general/waitFor";

export default class TypeOfProgrammePage {

    private readonly elements = {
        newProgrammeButton: element(by.css('a.btn.pull-right')),
        selectStandardLink: element(by.cssContainingText('a[href*="#"]', 'Apprenticeship Standard')),
        selectStandardButton: element(by.cssContainingText('button.btn.btn-lg', 'Select Standard')),
        selectFrameworkLink: element(by.cssContainingText('a[href*="#"]', 'Apprenticeship Framework')),
        selectFrameworkButton: element(by.cssContainingText('button.btn.btn-lg', 'Select Framework'))
    };

    public async clickStandardLink() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectStandardLink), 10000);
        await this.elements.selectStandardLink.click();
        await WaitFor.loadSpinner();
        return new ApprenticeshipStandardPage;
    }

    public async clickStandardButton() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectStandardButton), 10000);
        await this.elements.selectStandardButton.click();
        await WaitFor.loadSpinner();
        return new ApprenticeshipStandardPage;
    }

    public async clickFrameworkLink() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectFrameworkLink), 10000);
        await this.elements.selectFrameworkLink.click();
        await WaitFor.loadSpinner();
        return new ApprenticeshipStandardPage;
    }

    public async clickFrameworkButton() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.selectFrameworkButton), 10000);
        await this.elements.selectFrameworkButton.click();
        await WaitFor.loadSpinner();
        return new ApprenticeshipStandardPage;
    }
}
