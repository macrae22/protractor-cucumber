import { browser, by, element, ExpectedConditions, ElementFinder } from "protractor/built";
import { ExecuteScript } from "./executeScript";
import { ExpectedConditionsMany } from "./expectedConditionsMany";

export namespace WaitTime {
    export const normal = 10000;
    export const long = 60000;
}

export namespace WaitFor {
    namespace Elements {
        export const buttonSpinner = () => element(by.css('button > spinner-loading > span.spinnerContainer'));
        export const pageSpinners = () => element.all(by.css('span.spinnerContainer'));
    }

    /** Wait for the 'load spinner' to appear/disappear. */
    export async function loadSpinner(): Promise<void> {
        if (await Elements.pageSpinners().isPresent()) {
            await browser.wait(
                ExpectedConditionsMany.none(Elements.pageSpinners()),
                WaitTime.long,
                "Spinner did not hide!");
        }
    }

    /** Wait for the button 'load spinner' to appear/disappear. */
    export async function buttonLoadSpinner(): Promise<void> {
        if (await Elements.buttonSpinner().isPresent()) {
            await browser.wait(
                ExpectedConditions.invisibilityOf(Elements.buttonSpinner()),
                WaitTime.long,
                "Button spinner did not hide!");
        }
    }

    /**
     * Wait for any slow load spinners to appear/disappear.
     * Used in e.g. Employer search when the load spinner takes a split second to appear after a search.
     */
    export async function loadSpinnerToAppear(): Promise<void> {
        await browser.wait(ExpectedConditionsMany.any(Elements.pageSpinners()), WaitTime.normal, "Couldn't find spinner!");
        await browser.wait(ExpectedConditionsMany.none(Elements.pageSpinners()), WaitTime.long, "Spinner did not hide!");
    }

    /**  Wait for the URL to contain text. */
    export const urlToContain = (url: string) =>
        browser.wait(ExpectedConditions.urlContains(url), WaitTime.normal);

    /**
     * Wait for the URL to NOT contain text. Useful when exiting a modal window.
     */
    export const urlToNotContain = (url: string) =>
        browser.wait(ExpectedConditions.not(ExpectedConditions.urlContains(url)), WaitTime.normal);

    /**
     * Wait for an element to NOT be on the page.
     * Useful for modals that are slow to close down.
     */
    export const pageToNotContain = (selector: string) =>
        browser.wait(ExpectedConditions.stalenessOf(element(by.css(selector))));

    /**
     * Wait for an element to NOT be on the page.
     * Useful for modals that are slow to close down.
     */
    export const pageToNotContainElement = (elementFinder: ElementFinder) =>
        browser.wait(ExpectedConditions.stalenessOf(elementFinder));

    /**
     * Wait for an element to be on the page.
     * Useful for modals that are slow to display a required element.
     */
    export const pageToContain = (selector: string) =>
        browser.wait(ExpectedConditions.presenceOf(element(by.css(selector))));

    /**
     * Wait for an element to be on the page.
     * Useful for models that are slow to display a required element.
     */
    export const pageToContainElement = (elementFinder: ElementFinder, errorMessage: string) =>
        browser.wait(ExpectedConditions.presenceOf(elementFinder), WaitTime.normal, errorMessage);

    /**
     * Waits for a clickable field to appear, the clears its contents and fills it with data.
     * @param element Field to find and wait for.
     * @param keys To fill the field.
     * @param errorMessage To display if the field cannot be found.
     */
    export async function clearAndSendKeys(
        element: ElementFinder, keys: string, errorMessage = ""): Promise<void>
    {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), WaitTime.normal, errorMessage);
        await element.clear();
        await element.sendKeys(keys);
    }

    /**
     * Waits for an element to be clickable, then clicks it.
     * Includes handling of some annoying edge cases!
     * @param element To find and click when it is ready.
     * @param elementName To show if the element cannot be found and is not clickable.
     */
    export async function andClick(element: ElementFinder, elementName = "element"): Promise<void> {
        await browser.wait(
            ExpectedConditions.visibilityOf(element),
            WaitTime.normal,
            `Could not find ${elementName}!`);

        await ExecuteScript.scrollIntoView(element);

        await browser.wait(
            ExpectedConditions.elementToBeClickable(element),
            WaitTime.normal,
            `Wait for ${elementName} to be clickable failed!`);

        try {
            await element.click();
        } catch {
            // Now try mouse action, due to an apparent issue in Chrome Driver...
            // https://github.com/angular/protractor/issues/4589
            console.warn(`Could not click ${elementName}, trying mouse actions...`);

            await element
                .getWebElement()
                .then(webElement => browser
                    .actions()
                    .mouseMove(webElement)
                    .click()
                    .perform());
        }
    }

    /**
     * Waits for an element to be clickable, scroll to top of page, then clicks it.
     * Useful when an element such as a sub menu overlaps the element to be clicked.
     */
    export async function scrollToTopAndClick(element: ElementFinder, errorMessage = ""): Promise<void> {
        await ExecuteScript.scrollToTopOfPage();
        await browser.wait(ExpectedConditions.elementToBeClickable(element), WaitTime.normal, errorMessage);
        await element.click();
    }

    /**
     * Attempts to perform an action until it runs successfully.
     * Occasionally, browser elements can be reloaded very quickly and often,
     * sometimes even enough to cause an recently-located element to become stale
     * when next invoking an action on it! As such, this brute-force approach repeats
     * an action until it has completed, or throws an error.
     * @param action Action to be repeated.
     * @param times The action will be repeated
     * @throws Error if none of the attempts were successful.
     */
    export async function throwingActionToComplete
        (action: () => Promise<void>, times = 5): Promise<void>
    {
        for (let i = 0; i < times; ++i) {
            try {
                await action();
            } catch {
                continue;
            }

            return;
        }

        throw new Error("Could not complete repeated action!");
    }
}
