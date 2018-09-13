import { element, by, browser, ExpectedConditions } from "protractor/built";

import EditEmployerOverviewPage from "./editEmployerOverviewPage";
import EditAdditionalInformationPage from "./editAdditionalInformationPage";
import AddEmployerContactsDetailsPage from "./addEmployerContactDetailsPage";
import AddEmployerLiabilityInsuranceCertificatePage from "./addEmployerLiabilityInsuranceCertificatePage";
import AddEmployerHealthAndSafetyEvidencePage from "./addEmployerHealthAndSafetyEvidencePage";
import AddEmployerWrittenAgreementEvidencePage from "./addEmployerWrittenAgreementEvidencePage";
import { WaitFor } from "../../general/waitFor";

export namespace EmployerRecordPage {
    export namespace Buttons {
        export const firstEditContactDetails = () =>
            element(by.xpath('(//a[contains(@href, "edit-contact")])[1]'));

        export const editOverview = () =>
            element(by.css('a[routerlink="edit-details"]'));

        export const editAdditionalInfo = () =>
            element(by.css('a[routerlink="edit-additional-info"]'));

        export const addContact = () => element(by.css('a[routerlink="add-contact"]'));

        export const addLiabilityInsuranceCertificate = () =>
            element(by.css('a[routerlink="add-liability-cert"]'));

        export const addHealthAndSafetyEvidence = () =>
            element(by.css('a[routerlink="add-health-and-safety-cert"]'));

        export const addWrittenAgreementEvidence = () =>
            element(by.css('a[routerlink="add-written-agreement"]'));
    }

    export async function isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/employer/summary'));
        return (await browser.getTitle()) === "Employer summary";
    }

    export async function clickEditOverview() {
        await WaitFor.andClick(Buttons.editOverview());
        return new EditEmployerOverviewPage;
    }

    export const clickFirstEditEmployerContactDetails = async () =>
        WaitFor.andClick(Buttons.firstEditContactDetails());

    export async function clickEditAdditionalInformation(): Promise<EditAdditionalInformationPage> {
        await WaitFor.andClick(Buttons.editAdditionalInfo());
        return new EditAdditionalInformationPage;
    }

    export async function clickAddEmployerContact(): Promise<AddEmployerContactsDetailsPage> {
        await WaitFor.andClick(Buttons.addContact());
        return new AddEmployerContactsDetailsPage;
    }

    export async function clickAddEmployerLiabilityInsuranceCertificate(): Promise<AddEmployerLiabilityInsuranceCertificatePage> {
        await WaitFor.andClick(Buttons.addLiabilityInsuranceCertificate());
        return new AddEmployerLiabilityInsuranceCertificatePage;
    }

    export async function clickAddHealthAndSafetyEvidence(): Promise<AddEmployerHealthAndSafetyEvidencePage> {
        await WaitFor.andClick(Buttons.addHealthAndSafetyEvidence());
        return new AddEmployerHealthAndSafetyEvidencePage;
    }

    export async function clickAddwrittenAgreementEvidence(): Promise<AddEmployerWrittenAgreementEvidencePage> {
        await WaitFor.andClick(Buttons.addWrittenAgreementEvidence());
        return new AddEmployerWrittenAgreementEvidencePage;
    }
}
