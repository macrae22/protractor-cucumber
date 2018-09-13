import { browser, ExpectedConditions } from "protractor/built";

export default class ProgrammeFunctionalSkillsTab {
    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/functional-skills'));
        return (await browser.getTitle()) === "Functional skills";
    }
}
