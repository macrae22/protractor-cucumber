import { element, by, browser, ExpectedConditions } from "protractor/built";
import EditEmployerLocationOverviewPage from "../employer_location/editEmployerLocationOverviewPage";
import EditEmployerLocationAdditionalInformationPage from "./editEmployerLocationAdditionalInformationPage";
import EditEmployerLocationContactsDetailsPage from "./editEmployerLocationContactDetailsPage";
import AddEmployerLocationContactDetailsPage from "./addEmployerLocationContactDetailsPage";
import AddEmployerLocationLiabiltyInsuranceCertificatePage from "./addEmployerLocationLiabilityInsuranceCertificatePage";

export default class EmployerLocationRecordPage {

    private readonly elements = {
        editOverviewButton: element(by.css('a[routerlink="edit-details"]')),
        editEmployerContactDetailsButtons: element.all(by.css('a.pl-1.pull-right.btn.secondary[href*="edit-contact"]')),
        editAdditionalinformationButton: element(by.css('a[routerlink="edit-additional-info"]')),
        addEmployerContactButton: element(by.css('a[routerlink="add-contact"]')),
        addEmployerLiabilityInsuranceCertificateButton: element(by.css('a[routerlink="add-liability-cert"]'))
    };

    public async isOnPage() {
        await browser.wait(ExpectedConditions.urlContains('/employer/summary'));
        return (await browser.getTitle()) === "Employer summary";
    }

    public async clickEditOverview() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.editOverviewButton), 10000);
        await this.elements.editOverviewButton.click();
        return new EditEmployerLocationOverviewPage;
    }

    public async clickEditEmployerContactDetails() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.editEmployerContactDetailsButtons.get(0)), 10000);
        await this.elements.editEmployerContactDetailsButtons.get(0).click();
        return new EditEmployerLocationContactsDetailsPage;
    }

    public async clickEditAdditionalInformation() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.editAdditionalinformationButton), 10000);
        await this.elements.editAdditionalinformationButton.click();
        return new EditEmployerLocationAdditionalInformationPage;
    }

    public async clickAddEmployerContact() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addEmployerContactButton), 10000);
        await this.elements.addEmployerContactButton.click();
        return new AddEmployerLocationContactDetailsPage;
    }

    public async clickAddEmployerLiabilityInsuranceCertificate() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addEmployerLiabilityInsuranceCertificateButton), 10000);
        await this.elements.addEmployerLiabilityInsuranceCertificateButton.click();
        return new AddEmployerLocationLiabiltyInsuranceCertificatePage;
    }

}
