import { by, element } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export namespace CandidateSummaryPage {
    export namespace Elements {
        export const signUpApplicantButton = () => element(by.cssContainingText('.btn','Sign-up applicant'));
    }

    export async function clickSignUpApplicant() {
        await WaitFor.andClick(Elements.signUpApplicantButton());
        await WaitFor.buttonLoadSpinner();
        await WaitFor.loadSpinner();
    }
}
