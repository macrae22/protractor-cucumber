import { element, by, browser, ExpectedConditions, until } from "protractor/built";
import { expect } from "chai";
import { WaitFor, WaitTime } from "../../general/waitFor";

export namespace ApplicantsPage {
    export namespace Elements {
        export const sortName = () => element(by.css('option[value="name"]'));
        export const sortCreationDateTime = () => element(by.css('option[value="creationDateTime"]'));
        export const sortLatestActivity = () => element(by.css('option[value="lastModifiedDateTime"]'));
        export const listAllApplicants = () => element.all(by.css('a[href*="/application/manage/candidate"]'));
        export const newApplicantButton = () => element(by.css('a.btn.primary'));
        export const searchField = () => element(by.css('[name="searchTerm"]'));
        export const searchCAField = () => element(by.css('[name="query"]'));
        export const applicant = (applicantName: string) => element(by.cssContainingText('ul > li > div > div > a', `${applicantName}`));

        /**
         * To ensure we handle future changes to search filter ordering,
         * this looks for an options by name. However, the name can contain
         * both soft whitespace (" ") and content whitespace ("&nbsp;")!
         * Options can also be marked as Edited, so multiple matches for e.g.
         * Complete may be returned. As such, look for the all options that contain
         * the text we want, and return the first one, as the non-edited options should
         * always appear before the edited ones...
         * @param text Option that contains this value.
         */
        export const filterOption = (text: string) =>
            element.all(by.xpath(`//option[contains(., "${text}")]`)).first();
    }

    export async function isOnPage(): Promise<void> {
        await browser.wait(ExpectedConditions.urlContains('/manage'), WaitTime.normal);
        (await browser.getTitle()) === "Manage applicants";
    }

    export async function viewSpecificApplicant(applicantName: string): Promise<void> {
        await WaitFor.andClick(Elements.applicant(applicantName));
        await WaitFor.loadSpinner();
    }

    export const clickAddNewApplicant = () =>
        WaitFor.andClick(Elements.newApplicantButton());

    export const sortByCreationDateTime = () =>
        WaitFor.andClick(Elements.sortCreationDateTime());

    export const sortByLatestActivity = () =>
        WaitFor.andClick(Elements.sortLatestActivity());

    export const clickFilter = (text: string) => WaitFor.throwingActionToComplete(
        () => WaitFor.andClick(Elements.filterOption(text)));

    export async function viewApplicant() {
        await WaitFor.andClick(Elements.listAllApplicants().get(0));
        await WaitFor.loadSpinner();
    }

    export async function searchFor(searchText) {
        await browser.wait(ExpectedConditions.elementToBeClickable(Elements.searchField()));
        await Elements.searchField().sendKeys(searchText);
    }

    export async function searchCAFor(searchText) {
        await browser.wait(ExpectedConditions.elementToBeClickable(Elements.searchCAField()));
        await Elements.searchCAField().sendKeys(searchText);
        await WaitFor.loadSpinner();
    }

    export async function hasRecordsWithStatus(status: string) {
        await browser.wait(until.elementsLocated(by.css(".status-container")));
        const firstRowText = await element.all(by.css(".status-container")).first().getText();
        expect(firstRowText).to.equal(status);
    }

    export const hasCandidateLink = async (name: string) =>
        browser.wait(ExpectedConditions.visibilityOf(element(by.xpath(`//a[normalize-space(text())="${name}"]`))));
}
