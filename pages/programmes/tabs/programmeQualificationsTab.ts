import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export namespace ProgrammeQualificationsTab {
    export namespace Elements {
        export const firstEditButton = () =>
            element.all(by.css('.btn.white-out.primary-text')).first();
    }

    export async function isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/programme-qualifications'));
        return (await browser.getTitle()) === "Programme qualifications";
    }

    export async function clickEdit() {
        await WaitFor.andClick(Elements.firstEditButton());
    }
}
