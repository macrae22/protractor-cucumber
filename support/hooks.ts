const { Before, BeforeAll, After, Status, setDefaultTimeout } = require("cucumber");
import { browser } from "protractor";

import { config } from "../config/config";
import { HomepagePage } from "../pages/homepage/homepagePage";
import { LoginPage } from "../pages/login/loginPage";
import { WaitFor } from "../pages/general/waitFor";

const getBaseUrl = async () => browser.get(config.baseUrl || "");

BeforeAll({ timeout: 100 * 1000 }, async function() {
    await setDefaultTimeout(60 * 1000);
    await getBaseUrl();
});

// Bomb out of the whole test session if the browser has crashed or been closed.
// Stops the output noise from all further failed tests.
Before(async function () {
    if ((await browser.getAllWindowHandles()).length < 1) {
        console.error("No browser windows open, closing the test session!");
        process.exit(1);
    }
});

/*
 * Get us back to a consistent state for the next test.
 * Attachs a screenshot of the scenario failure, or an error here.
 * Uses an anonymous function, rather than the arrow syntax,
 * due the "world" state being bound to "this"...
 * https://github.com/cucumber/cucumber-js/blob/master/docs/faq.md
 */
After(async function (scenario) {
    const hadFailed = scenario.result.status === Status.FAILED;

    // Use a local function for reusing attaching screenshot logic, due to "this" context.
    const attachScreenshot = async () => this.attach(await browser.takeScreenshot(), "image/png");

    if (hadFailed) {
        await attachScreenshot();
    }

    try {
        await getBaseUrl();
        await browser.sleep(1000);
        await WaitFor.loadSpinner();

        // Log out only if logged in.
        if (await HomepagePage.isLoggedIn()) {
            await HomepagePage.logout();
            await LoginPage.isOnPage();
        }
    } catch (ex) {
        // Attach a screenshot if there was not an error with the scenario.
        if (!hadFailed) {
            await attachScreenshot();
        }

        // Rethrow the exception to ensure the hook is shown to fail in the report.
        throw ex;
    }
});
