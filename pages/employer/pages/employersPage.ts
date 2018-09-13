import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export namespace EmployersPage {
    export namespace Elements {
        export const addNewEmployerButton = () => element(by.css('a[href*="/employer/creation"]'));
        export const firstEditEmployerButton = () => element.all(by.css('button.btn.secondary.primary-text.main-button.pull-right')).first();
        export const firstEditEmployerLocationButton = () => element.all(by.css(('.row.ml-0.mr-0.pr-0 button[type*="button"'))).first();
        export const firstAddAnotherLocationButton = () => element.all(by.css(('a[href*="add-location"'))).first();
        export const searchField = () => element(by.css('[name="query"]'));

        export const addressHeader = (title: string) =>
            element(by.xpath(`//employer-address/h4[normalize-space(text())="${title}"][1]`));
    }

    export async function isOnPage(): Promise<boolean> {
        await browser.wait(ExpectedConditions.urlContains('/employer'));
        return (await browser.getTitle()) === "Employers";
    }

    export const clickAddNewEmployer = () =>
        WaitFor.andClick(Elements.addNewEmployerButton());

    export const editEmployer = async () =>
        WaitFor.andClick(Elements.firstEditEmployerButton());

    export const editEmployerLocation = async () =>
        WaitFor.andClick(Elements.firstEditEmployerLocationButton());

    export const addressHeaderExists = async (name: string) =>
        browser.wait(ExpectedConditions.presenceOf(Elements.addressHeader(name)));

    export const clickAddAnotherLocation = async () =>
        WaitFor.andClick(Elements.firstAddAnotherLocationButton());

    export async function viewSpecificEmployer(employerName: string): Promise<void> {
        const employer = element(by.cssContainingText('employer-address > h4', `${employerName}`));
        await browser.wait(ExpectedConditions.elementToBeClickable(employer), 10000);
        await employer.click();
        await WaitFor.loadSpinner();
    }

    export async function searchFor(searchText): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(Elements.searchField()));
        await Elements.searchField().sendKeys(searchText);
        await WaitFor.loadSpinner();
    }
}
