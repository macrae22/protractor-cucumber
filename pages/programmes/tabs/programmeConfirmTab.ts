import { browser, ExpectedConditions } from "protractor/built";

export default class ProgrammeConfrimTab {
    //Cannot use this method as the 'title' currently uses the URL of the page
    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/confirm'));
        return (await browser.getTitle()) === "Confirm Programme details";
    }

}
