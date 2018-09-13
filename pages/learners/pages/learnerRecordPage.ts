import { element, by, browser } from "protractor/built";
import { WaitFor } from "../../general/waitFor";
import { ExpectedConditionsMany } from "../../general/expectedConditionsMany";

export namespace LearnerRecordPage {
    export namespace Elements {
        export const viewSubmissionsButton = () => element.all(by.cssContainingText('.btn.secondary', 'VIEW SUBMISSIONS')).get(0);

        /**
         * Find the filter based on the name it starts with,
         * to avoid similar names and the learner count in brackets.
         * @param filterName Option to select.
         */
        export const filterOption = (filterName: string) => element
            .all(by.css('.activity-filter > select > option'))
            .filter(element => element.getText().then(text => text.trim().startsWith(filterName)))
            .first();

        export const searchResultsStatuses = (status: string) => element.all(by.cssContainingText('learning-portal-activity-status-component', `${status}`));
        export const dropdownToggle = (option: string) => element(by.cssContainingText('.dropdown-toggle > span', `${option}`));
        export const dropdownItem = (option: string) => element(by.cssContainingText('.dropdown-item', `${option}`));
    }

    export async function clickViewSubmissionsButton() {
        await WaitFor.scrollToTopAndClick(Elements.viewSubmissionsButton());
        await WaitFor.loadSpinner();
    }

    export async function filterBy(filterName: string) {
        await WaitFor.andClick(Elements.filterOption(filterName));
    }

    export async function selectDropDownToggle(option: string) {
        await WaitFor.andClick(Elements.dropdownToggle(option));
    }

    export async function selectDropDownItem(option: string) {
        await WaitFor.andClick(Elements.dropdownItem(option));
    }

    export async function searchResultsContainStatus(status: string) {
        // Unfortunately, a small nap here is the way to best ensure the loading
        // pattern of the form takes place after filtering. Without, Protracor can
        // be too fast, and so interrogates the old data.
        await browser.sleep(500);
        await WaitFor.loadSpinner();
        await browser.wait(ExpectedConditionsMany.any(Elements.searchResultsStatuses(status)));
    }
}
