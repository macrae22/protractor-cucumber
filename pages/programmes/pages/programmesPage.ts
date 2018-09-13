import { element, by, browser, ExpectedConditions } from "protractor/built";
import TypeOfProgrammePage from "../pages/typeOfProgrammePage";
import ProgrammeRecordPage from "./programmeRecordPage";
import ProgrammeSettingsTab from "../tabs/programmeStandardTab";
import { WaitFor } from "../../general/waitFor";

export default class ProgrammesPage {

    private readonly elements = {
        newProgrammeButton: element(by.css('a.btn.pull-right')),
        viewButtons: element.all(by.cssContainingText('button.btn.white-out.primary-text.main-button', 'view')),
        editButtons: element.all(by.cssContainingText('button.btn.white-out.primary-text.main-button', 'edit')),
        filterDraft: element(by.cssContainingText('option', 'Draft')),
        filterAwaitingApproval: element(by.cssContainingText('option', 'Awaiting Approval')),
        filterPublished: element(by.cssContainingText('option', 'Published')),
        filterArhcived: element(by.cssContainingText('option', 'Archived'))
    };

    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/programmes'));
        return (await browser.getTitle()) === "List of Programmes";
    }

    public async clickNewProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.newProgrammeButton), 10000);
        await this.elements.newProgrammeButton.click();
        return new TypeOfProgrammePage;
    }

    public async viewProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.viewButtons.get(0)), 10000);
        await this.elements.viewButtons.get(0).click();
        //There are two load spinners that need to be waited for here
        await WaitFor.loadSpinner();
        await WaitFor.loadSpinner(); //<-- Could add a contructor to the 'programmeRecordPage' which does this second wait??
        return new ProgrammeRecordPage;
    }

    public async viewSpecificProgramme(programmeName: string) {
        const programme = element(by.cssContainingText('.program-list-title > div > a', `${programmeName}`));
        await programme.click();
        //There are two load spinners that need to be waited for here
        await WaitFor.loadSpinner();
        await WaitFor.loadSpinner();
        return new ProgrammeRecordPage;
    }

    public async editProgramme() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.editButtons.get(0)), 10000);
        await this.elements.editButtons.get(0).click();
        //There are two load spinners that need to be waited for here
        await WaitFor.loadSpinner();
        await WaitFor.loadSpinner();
        return new ProgrammeSettingsTab;
    }

    public async filterByDraft() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.filterDraft));
        await this.elements.filterDraft.click();
        return this;
    }

    public async filterByAwaitingApproval() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.filterAwaitingApproval));
        await this.elements.filterAwaitingApproval.click();
        return this;
    }

    public async filterByPublished() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.filterPublished));
        await this.elements.filterPublished.click();
        return this;
    }

    public async filterByArchived() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.filterArhcived));
        await this.elements.filterArhcived.click();
        return this;
    }

}
