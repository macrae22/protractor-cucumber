import { element, by } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export namespace ApplicantDocumentsPage {
    namespace Elements {
        export const applicationSummaryLink = () => element.all(by.css('a[href*="/application/manage/candidate-overview"]')).first();
        export const commitmentStatementLink = () => element.all(by.css('a[href*="/commitmentstatement/snapshot"]')).first();
        export const fundingLink = () => element.all(by.css('a[href*="/application/funding"]')).first();
        export const additionalLearningSupportLink = () => element(by.css('a[href*="/learning-support/compliance"]'));
    }

    export async function clickApplicationSummary() {
        await WaitFor.andClick(Elements.applicationSummaryLink());
        await WaitFor.loadSpinner();
    }

    export async function clickCommitmentStatement() {
        await WaitFor.andClick(Elements.commitmentStatementLink());
        await WaitFor.loadSpinner();
    }

    export async function clickFunding() {
        await WaitFor.andClick(Elements.fundingLink());
        await WaitFor.loadSpinner();
    }

    export async function clickAdditionalLearningSupport() {
        await WaitFor.andClick(Elements.additionalLearningSupportLink());
        await WaitFor.loadSpinner();
    }
}
