import { browser, ExpectedConditions } from "protractor/built";

export default class ProgrammeGapsTab {
    //Cannot use this method as the 'title' currently uses the URL of the page
    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/gap-analysis'));
        return (await browser.getTitle()) === "Gaps";
    }
}
