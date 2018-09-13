import { element, by } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export namespace LearnerActivityPage {
    export namespace Elements {
        export const viewAssessmentButton = () => element.all(by.cssContainingText('.btn.secondary', 'VIEW ASSESSMENT')).get(0);
    }

    export async function clickViewAssessmentButton() {
        await WaitFor.andClick(Elements.viewAssessmentButton());
        await WaitFor.loadSpinner();
    }
}
