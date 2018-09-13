import { browser, ElementFinder } from "../../node_modules/protractor";

export namespace ExecuteScript {
    export async function remove(element: ElementFinder): Promise<void> {
        if (await element.isPresent()) {
            await browser.executeScript('arguments[0] && arguments[0].remove();', element.getWebElement());
        }
    }

    export const scrollIntoView = async (element: ElementFinder) =>
        browser.executeScript("arguments[0].scrollIntoView();", element.getWebElement());

    export const scrollToTopOfPage = async () => browser.executeScript("window.scrollTo(0, 0);");
}
