import { by, element } from "protractor/built";
import { WaitFor } from "../../../general/waitFor";

export namespace SetProgrammeStartDatePage {
    export namespace Elements {
        export const ProgrammeActivitiesButton = () => element(by.cssContainingText('.btn','Next: Programme activities '));
    }

    export async function clickProgrammeActivities() {
        await WaitFor.andClick(Elements.ProgrammeActivitiesButton());
        await WaitFor.buttonLoadSpinner();
        await WaitFor.loadSpinner();
    }
}
