import { browser, ExpectedConditions } from "protractor/built";

export default class ApplicantApplicationSummarySnapshot {
    public async isOnPage(): Promise<void> {
        // Waits for the URL to contain '/candidate-overview' before checking page title
        // URL shown at STATUS: SIGNED-UP | COMPLETED | APPLICANT SIGNED UP EDITED | APPLICANT COMPLETED EDITED
        await browser.wait(ExpectedConditions.urlContains('/candidate-overview'), 10000);
        (await browser.getTitle()) === "Application snapshot";
    }
}
