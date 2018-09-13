import { ElementArrayFinder } from "../../node_modules/protractor";

/**
 * ExpectedConditions only allows for a a single element finder, i.e. ElementFinder.
 * This namespace provides simple custom functions to for multiple elements.
 */
export namespace ExpectedConditionsMany {
    /**
     * @description Tests that any elements are returned from a finder.
     * @example browser.wait(ExpectedConditionsMany.any(Elements.searchResultsStatuses(status)));
     */
    export const any = (elementArrayFinder: ElementArrayFinder) =>
        (() => elementArrayFinder.count().then(actualCount => actualCount > 0));

    /**
     * @description Tests that no elements are returned from a finder.
     * @example browser.wait(ExpectedConditionsMany.none(Elements.searchResultsStatuses(status)));
     */
    export const none = (elementArrayFinder: ElementArrayFinder) =>
        (() => elementArrayFinder.count().then(actualCount => actualCount < 1));
}
