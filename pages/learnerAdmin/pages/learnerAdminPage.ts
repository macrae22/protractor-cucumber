import { element, by, browser, ExpectedConditions } from "protractor/built";
import { ExpectedConditionsMany } from "../../general/expectedConditionsMany";
import { WaitFor } from "../../general/waitFor";

export namespace LearnerAdminPage {
    export namespace Elements {
        /** Finds filter that start with text, as they may end with a count of the results. */
        export const filterOption = (filterName: string) =>
            element(by.xpath(`//*[@id='LearnerManagementSearchForm.filterBy']/option[starts-with(normalize-space(text()), '${filterName}')]`));

        export const firstViewButton = () => element(by.xpath('(//a/span[normalize-space(text())="View"])[1]'));
        export const viewInactiveButton = () => element(by.cssContainingText('.btn.secondary', 'View Inactive'));
        export const searchField = () => element(by.id('LearnerManagementSearchForm.term'));
        export const searchResultsStatuses = (status: string) => element.all(by.cssContainingText('.col-title-status', status));
        export const firstSearchResultTitle = (name: string) => element(by.cssContainingText('.col-title-name', name));
    }

    export async function clickInactiveButton() {
        await WaitFor.loadSpinner();
        await WaitFor.andClick(Elements.viewInactiveButton());
        await WaitFor.loadSpinner();
    }

    export async function searchFor(searchText) {
        await browser.wait(ExpectedConditions.elementToBeClickable(Elements.searchField()));
        await Elements.searchField().sendKeys(searchText);
        await WaitFor.loadSpinner();
    }

    export async function clickFirstViewButton() {
        await WaitFor.andClick(Elements.firstViewButton());
        await WaitFor.loadSpinner();
    }

    export async function filterBy(filterName: string) {
        await WaitFor.loadSpinner();
        await WaitFor.andClick(Elements.filterOption(filterName));
        await WaitFor.loadSpinner();
    }

    export const searchResultsContainStatus = (status: string) =>
        browser.wait(ExpectedConditionsMany.any(Elements.searchResultsStatuses(status)));

    export const searchResultsContainTitle = (result: string) =>
        browser.wait(ExpectedConditions.visibilityOf(Elements.firstSearchResultTitle(result)));
}
