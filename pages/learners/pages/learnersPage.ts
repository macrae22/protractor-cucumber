import { element, by } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export namespace LearnersPage {
    export namespace Elements {
        export const viewSubmissionsButton = () => element.all(by.cssContainingText('.btn.secondary', 'VIEW SUBMISSIONS')).get(0);
        export const learner = (learnerName: string) => element(by.cssContainingText('ul > li > a', `${learnerName}`));
    }

    export async function clickViewSubmissionsButton() {
        await WaitFor.andClick(Elements.viewSubmissionsButton());
        await WaitFor.loadSpinner();
    }

    export async function viewSpecificLearner(learnerName: string): Promise<void> {
        await WaitFor.andClick(Elements.learner(learnerName));
        await WaitFor.loadSpinner();
    }
}
