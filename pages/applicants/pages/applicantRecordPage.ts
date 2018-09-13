import { browser, by, element } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export namespace ApplicantRecordPage {
    export namespace Elements {
        export const editApplicantDetails = () => element.all(by.css('span.edit-option.btn.secondary'));
        export const editProgrammeDetails = () => element(by.css('programme-overview > application-detail-section > div > span > span.edit-option'));
        export const editBasicPersonalDetails = () => element(by.css('basic-personal-details-overview > application-detail-section > div > span > span.edit-option'));
        export const editEmploymentOverview = () => element(by.css('employment-overview > application-detail-section > div > span > span.edit-option'));
        export const editQualificationOverview = () => element(by.css('qualification-overview > application-detail-section > div .edit-option'));
        export const enabledScheduleSignUpMeeting = () => element(by.cssContainingText('button.btn', 'Schedule sign-up meeting'));
        export const editAdditionalPersonalDetails = () => element(by.css('additional-personal-details-overview > application-detail-section > div > span > span.edit-option'));
        export const editIdentityVerification = () => element(by.css('identity-verification-overview > application-detail-section > div > span > span.edit-option'));
        export const editSupportAndAccessRequirements = () => element(by.css('disabilities-overview > application-detail-section > div > span > span.edit-option'));
        export const editEmployerDetails = () => element(by.css('additional-employment-overview > application-detail-section > div > span > span.edit-option'));
        export const editQualificationDetails = () => element(by.css('qualification-details-overview > application-detail-section > div > span > span.edit-option'));
        export const editWrittenStatement = () => element(by.css('written-statement-overview > application-detail-section > div > span > span.edit-option'));
        export const editLearningStyleAssessmentOutcome = () => element(by.css('learning-style-overview > application-detail-section > div > span > span.edit-option'));
        export const editMeetingButton = () => element(by.css('.schedule-sign-up-meeting-overview .btn.secondary'));
        export const applicantSummaryButton = () => element.all(by.cssContainingText('.btn','Applicant Summary')).get(0);
    }

    export async function isOnPage() {
        // Waits for the URL to contain '/candidate-overview' before checking page title
        // URL shown at STATUS: NEW | INVITED | TO SCHEDULE | SCHEDULED
        await WaitFor.loadSpinner();
        await WaitFor.urlToContain('/candidate-overview');
        return (await browser.getTitle()) === "Candidate overview";
    }

    export async function clickEditProgrammeDetails() {
        await WaitFor.andClick(Elements.editProgrammeDetails());
        await WaitFor.loadSpinner();

        //List of Programmes can appear shortly after page loads (causes problems when test is v.fast)
        await WaitFor.pageToContain('.form-group > .form-group');
    }

    export async function clickEditBasicPersonalDetails() {
        await WaitFor.andClick(Elements.editBasicPersonalDetails());
        await WaitFor.loadSpinner();
    }

    export async function clickEditEmploymentOverview() {
        await WaitFor.andClick(Elements.editEmploymentOverview());
        await WaitFor.loadSpinner();
    }

    export async function clickEditQualificationOverview() {
        await WaitFor.andClick(Elements.editQualificationOverview());
        await WaitFor.loadSpinner();
    }

    export async function clickScheduleSignUpMeeting() {
        await WaitFor.andClick(Elements.enabledScheduleSignUpMeeting());
        await WaitFor.urlToContain('/schedule-sign-up');
    }

    export async function clickEditAdditionalPersonalDetails() {
        await WaitFor.andClick(Elements.editAdditionalPersonalDetails());
        await WaitFor.loadSpinner();

        // Wait for modal to fade in... sometimes the spinner completes,
        // but the fade in is slightly too slow (potentially)...
        // if this works, we can add to the 'Wait' helper functions.
        await WaitFor.pageToContain('.modal.fade.in[style="display: block;"]');
    }

    export async function clickEditIdentityVerification() {
        await WaitFor.andClick(Elements.editIdentityVerification());
        await WaitFor.loadSpinner();
    }

    export async function clickEditSupportAndAccessRequirements() {
        await WaitFor.andClick(Elements.editSupportAndAccessRequirements());
        await WaitFor.loadSpinner();
    }

    export async function clickEditEmployerDetails() {
        await WaitFor.andClick(Elements.editEmployerDetails());
        await WaitFor.loadSpinner();
    }

    export async function clickEditQualificationDetails() {
        await WaitFor.andClick(Elements.editQualificationDetails());
        await WaitFor.loadSpinner();
    }

    export async function clickEditWrittenStatement() {
        await WaitFor.andClick(Elements.editWrittenStatement());
        await WaitFor.loadSpinner();
    }

    export async function clickEditLearningStyleAssessmentOutcome() {
        await WaitFor.andClick(Elements.editLearningStyleAssessmentOutcome());
        await WaitFor.loadSpinner();
    }

    export async function clickEditMeeting() {
        await WaitFor.andClick(Elements.editMeetingButton());
        await WaitFor.loadSpinner();
    }

    export async function clickApplicantSummary() {
        await WaitFor.andClick(Elements.applicantSummaryButton());
        await WaitFor.loadSpinner();
    }
}
