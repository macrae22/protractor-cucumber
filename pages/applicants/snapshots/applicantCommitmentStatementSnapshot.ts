import { browser, ExpectedConditions } from "protractor/built";

export default class ApplicantCommitmentStatementSnapshot {
    public async isOnPage() {
        // Waits for the URL to contain '/candidate-overview' before checking page title
        // URL shown at STATUS: SIGNED-UP | COMPLETED | APPLICANT SIGNED UP EDITED | APPLICANT COMPLETED EDITED
        await browser.wait(ExpectedConditions.urlContains('/commitmentstatement/snapshot'), 10000);
        return (await browser.getTitle()) === "Applicant Commitment Statement";
    }
}
