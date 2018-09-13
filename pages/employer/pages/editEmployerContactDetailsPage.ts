import { element, by } from "protractor/built";
import { WaitFor } from "../../general/waitFor";

export namespace AddEmployerContactDetailsPage {
    export namespace Elements {
        export const firstNameField = () => element(by.css('input[formcontrolname="firstName"]'));
        export const lastNameField = () => element(by.css('input[formcontrolname="lastName"]'));
        export const jobRolefield = () => element(by.css('input[formcontrolname="jobRole"]'));
        export const phoneNumberField = () => element(by.css('input[formcontrolname="phone"]'));
        export const emailAddressField = () => element(by.css('input[formcontrolname="email"]'));
    }

    export const enterFirstName = async () =>
        WaitFor.clearAndSendKeys(Elements.firstNameField(), 'Daenerys');

    export const enterLastName = async () =>
        WaitFor.clearAndSendKeys(Elements.lastNameField(), 'Targaryen');

    export const enterJobRole = async () =>
        WaitFor.clearAndSendKeys(Elements.jobRolefield(), 'Mother of dragons');

    export const enterPhoneNumber = async () =>
        WaitFor.clearAndSendKeys(Elements.phoneNumberField(), '07795111555');

    export const enterEmailAddress = async () =>
        WaitFor.clearAndSendKeys(Elements.emailAddressField(), 'daenerys.targaryen@automationtest.com');

    export async function editEmployerContactDetails() {
        await enterFirstName();
        await enterLastName();
        await enterJobRole();
        await enterPhoneNumber();
        await enterEmailAddress();
    }
}
