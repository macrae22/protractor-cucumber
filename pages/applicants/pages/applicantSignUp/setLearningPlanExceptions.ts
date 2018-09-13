import { by, element } from "protractor/built";
import { WaitFor } from "../../../general/waitFor";

export namespace SetLearningPlanExceptionsPage {
    export namespace Elements {
        export const ProgrammeStartDateButton = () => element(by.cssContainingText('.btn','Next: Programme start date'));
    }

    export async function clickProgrammeStartDate() {
        await WaitFor.andClick(Elements.ProgrammeStartDateButton());
        await WaitFor.loadSpinner();
    }
}
