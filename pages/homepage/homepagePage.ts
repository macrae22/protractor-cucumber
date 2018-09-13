import { browser, by, element, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../general/waitFor";
import ProgrammesPage from "../programmes/pages/programmesPage";
import { ExecuteScript } from "../general/executeScript";

export namespace HomepagePage {
    export namespace Elements {
        export const dashboardLink = () => element(by.css('li > [routerlink="/dashboard"]'));
        export const programmesLink = () => element(by.css('li > [routerlink="/programme"]'));
        export const applicantsLink = () => element(by.css('li > [routerlink="/application/manage"]'));
        export const applicantsCALink = () => element(by.css('li > [routerlink="/application/ca-manage"]'));
        export const trainerLink = () => element(by.css('li > [routerlink="/assessors"]'));
        export const employerLink = () => element(by.css('li > [routerlink="/employer"]'));
        export const learnerLink = () => element(by.css('li > [routerlink="/learningportal/assessor/all-learners"]'));
        export const learnerAdminLink = () => element(by.css('li > [routerlink="/learner-management"]'));
        export const accountOptions = () => element(by.tagName('current-user-profile-picture'));
        export const logoutLink = () => element(by.css('chorus-bud-login a'));
    }

    export async function isOnPage(): Promise<boolean> {
        // Waits for the URL to equal the base URL before checking page title
        await browser.wait(ExpectedConditions.urlIs(browser.baseUrl), 10000);
        return (await browser.getTitle()) === "Home";
    }

    export async function clickDashboardLink(): Promise<void> {
        await WaitFor.andClick(Elements.dashboardLink());
        await WaitFor.loadSpinner();
    }

    export async function clickProgrammesLink() {
        await WaitFor.andClick(Elements.programmesLink());
        await WaitFor.loadSpinner();
        return new ProgrammesPage();
    }

    export async function clickApplicantsLink() {
        await WaitFor.andClick(Elements.applicantsLink());
        await WaitFor.loadSpinner();
    }

    export async function clickApplicantsCALink() {
        await WaitFor.andClick(Elements.applicantsCALink());
        await WaitFor.loadSpinner();
    }

    export async function clickTrainersLink() {
        await WaitFor.andClick(Elements.trainerLink());
        await WaitFor.loadSpinner();
    }

    export async function clickEmployerLink() {
        await WaitFor.andClick(Elements.employerLink());
        await WaitFor.loadSpinner();
    }

    export async function clickLearnersLink(): Promise<void> {
        await WaitFor.loadSpinner();
        await WaitFor.andClick(Elements.learnerLink());
        await WaitFor.loadSpinner();
    }

    export async function clickLearnerAdminLink() {
        await WaitFor.andClick(Elements.learnerAdminLink());
        await WaitFor.loadSpinner();
    }

    export async function logout(): Promise<void> {
        // Cover any delayed 'load spinners', which appear after
        // other actions check for - and, subsequently - miss it.
        await ExecuteScript.scrollToTopOfPage();
        await WaitFor.loadSpinner();
        await WaitFor.andClick(Elements.accountOptions(), "account options");
        await WaitFor.andClick(Elements.logoutLink(), "log out");
    }

    export async function isLoggedIn(): Promise<boolean> {
        await ExecuteScript.scrollToTopOfPage();
        await WaitFor.loadSpinner();
        return Elements.accountOptions().isPresent();
    }
}
