import { assert } from 'chai';
import { browser, ExpectedConditions, element, by } from "protractor";
import { WaitFor } from '../pages/general/waitFor';

const { Then, When } = require("cucumber");

namespace Elements {
    export const closeButton = () => element(by.xpath('//button[contains(., "CLOSE")]'));
    export const saveAndCloseButton = () => element(by.css('button.btn-save'));
}

Then(/^the "(.*)" header is displayed$/, async (header: string) => {
    const finder = element.all(by.xpath("//h1|//h2|//h3")).first();
    browser.wait(ExpectedConditions.textToBePresentInElement(finder, header));
});

Then(/^the "(.*)" page is displayed$/, async (pageTitle: string) => {
    // Chrome does not always return the page title first time,
    // so retry a few times just in case.
    for (let i = 0; i < 5; ++i) {
        const actualTitle = await browser.getTitle();

        if (actualTitle === pageTitle) {
            return;
        }

        console.log(`Page title get attempt ${i} failed, got "${actualTitle}", retrying...`);
        browser.sleep(1000);
    }

    assert.fail();
});

// TODO Move to generic page.

When(/^I click the 'Close' CTA$/, async () => {
    await WaitFor.andClick(Elements.closeButton(), "close button");
    await browser.wait(ExpectedConditions.not(ExpectedConditions.visibilityOf(Elements.closeButton())));
});

When(/^I click the 'Save & Close' CTA$/, async () => {
    await WaitFor.andClick(Elements.saveAndCloseButton(), "save and close button");
    await browser.wait(ExpectedConditions.not(ExpectedConditions.visibilityOf(Elements.saveAndCloseButton())));
});
