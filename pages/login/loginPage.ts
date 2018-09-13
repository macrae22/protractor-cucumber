import { browser, by, element, until } from "protractor";
import { expect } from "chai";
import { Params } from "../../config/params";
import { User } from "../../config/user";
import { WaitFor, WaitTime } from "../general/waitFor";
import { ExecuteScript } from "../general/executeScript";

export namespace LoginPage {
    export const getUsers = () => (browser.params as Params).users;

    export namespace Elements {
        export const app = () => by.css("chorus-bud-app");
        export const forgotPasswordLink = () => by.id('ForgotPassword');
        export const loginButton = () => by.id('login');
        export const passwordField = () => by.id('password');
        export const usernameField = () => by.id('username');
        export const zendeskButton = () => by.id('launcher');

        export namespace AcceptCookies {
            export const background = () => by.id('optanon-popup-bg');
            export const backgroundOff = () => by.css('#optanon-popup-bg[style="z-index: 7000; display: none;"]');
            export const button = () => by.css('a.optanon-allow-all');
            export const wrapper = () => by.css('.optanon-alert-box-wrapper');
        }
    }

    export const isOnPage = () => browser.wait(until.elementLocated(Elements.usernameField()), WaitTime.long, "No email field!");

    export const loginAsTrainer = () => loginAsUser(getUsers().trainer);

    export const loginAsOperationsManager = () => loginAsUser(getUsers().opsManager);

    export const loginAsComplianceAdmin = () => loginAsUser(getUsers().complianceAdmin);

    export const loginAsLearner = () => loginAsUser(getUsers().learner);

    export async function acceptCookies(): Promise<void> {
        // Accept the cookie policy if displayed.
        const popup = await browser.wait(
            until.elementLocated(Elements.AcceptCookies.background()),
            WaitTime.normal,
            "Could not find cookie banner!");

        if (await popup.isDisplayed()) {
            // Accept cookies.
            await WaitFor.andClick(
                element(Elements.AcceptCookies.button()),
                "cookie banner accept button");

            // Wait for cookie pop-up to disappear (completey fade-out).
            await WaitFor.pageToContain('#optanon-popup-bg[style="z-index: 7000; display: none;"]');

            // Finally, nuke it! For some reason, the elements within the banner can still conflict
            // with other elements, even after waiting for it to hide in various weird ways.
            await ExecuteScript.remove(element(Elements.AcceptCookies.wrapper()));
        }
    }

    async function loginAsUser(user: User): Promise<void> {
        expect(user).to.not.be.null;

        // Enter details.
        await browser.wait(until.elementLocated(Elements.usernameField()), WaitTime.long, "No email field!");
        await browser.wait(until.elementLocated(Elements.passwordField()), WaitTime.long, "No password field!");

        await element(Elements.usernameField()).sendKeys(user.email);
        await element(Elements.passwordField()).sendKeys(user.password);

        // Click login.
        await element(Elements.loginButton()).click();

        // Wait for the page to load.
        await browser.wait(until.elementLocated(Elements.app()), WaitTime.long, "App did not load!");

        // Remove the Zendesk widget if it exists, as it can hide elements we need to test.
        // Note that checking the widget exists must be performed in the browser, not in Protractor,
        // as calling .remove() on a null object (should not happen, but does!) will cause all tests to fail :(
        await ExecuteScript.remove(element(Elements.zendeskButton()));
    }

    export const isLoggedIn = async () =>
        expect((await browser.getTitle())).to.equal("Home");
}
