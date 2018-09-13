import { browser, ExpectedConditions } from "protractor/built";

export default class ApplicantFundingSnapshot {
    public async isOnPage() {
        // Waits for the URL to contain '/candidate-overview' before checking page title
        // URL shown at STATUS: SIGNED-UP | COMPLETED | APPLICANT SIGNED UP EDITED | APPLICANT COMPLETED EDITED
        await browser.wait(ExpectedConditions.urlContains('/application/funding'), 10000);
        return (await browser.getTitle()) === "Funding snapshot";
    }
}
