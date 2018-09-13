import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";
import { ExecuteScript } from "../../general/executeScript";
import { ExpectedConditionsMany } from "../../general/expectedConditionsMany";

export namespace learningOverviewPage {
    export namespace Elements {
        export const allActivities = () => element.all(by.css('learning-portal-activity-overview > div > div > div > a'));
        export const container = () => element(by.tagName('learning-portal-learner-overview'));
        export const viewConfirmSubmissionButton = () => element.all(by.cssContainingText('.btn.secondary', 'CONFIRM SUBMISSION')).get(0);
    }

    export async function viewActivity() {
        // Wait for the activities to load, then click the first one.
        await browser.wait(ExpectedConditionsMany.any(Elements.allActivities()));
        await WaitFor.andClick(Elements.allActivities().first());
        await WaitFor.loadSpinner();
    }

    export async function clickConfirmSubmissionButton() {
        await WaitFor.andClick(Elements.viewConfirmSubmissionButton());
        await WaitFor.loadSpinner();
    }

    export async function isLoggedIn(): Promise<void> {
        await ExecuteScript.scrollToTopOfPage();
        await WaitFor.loadSpinner();
        await browser.wait(ExpectedConditions.visibilityOf(Elements.container()));
    }
}
