import { element, by, browser, ExpectedConditions } from "protractor/built";
import { WaitFor } from "../../general/waitFor";
import { DateValueProviders } from "../../valueProviders/dateValueProviders";

export namespace ApplicantScheduleSignUpMeetingModel {
    namespace Elements {
        export const setDateTime = () => element(by.css('input[placeholder*="dd/mm/yyyy"]'));

        /**
         * Hour values: 0-23/28-51 = midnight to 23:00
         * Minute values: 00=24/52 | 15=25/53 | 16=30/54 | 17=45/55
         */
        export const minutePickers = (value: number) => element(by.css(`option[value="${value}"]`));

        export const setLocationfield = () => element(by.id('UpdateScheduleForm.location'));
        export const scheduleSignupMeeting = () => element(by.css('.btn[value="Schedule"]'));
    }

    export async function isOnPage(): Promise<void> {
        await WaitFor.urlToContain('/schedule-sign-up');
        (await browser.getTitle()) === "Candidate overview";
    }

    export async function enterSignupMeetingDate(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(Elements.setDateTime()), 10000);
        await Elements.setDateTime().sendKeys(DateValueProviders.tomorrow());
    }

    export async function setSignupMeetingTime(): Promise<void> {
        await WaitFor.andClick(Elements.minutePickers(13)); //0-23
        await WaitFor.andClick(Elements.minutePickers(26)); // 24=00/25=15/26=30/27=45
        await WaitFor.andClick(Elements.minutePickers(46)); // 28 - 51
        await WaitFor.andClick(Elements.minutePickers(55)); // 52=00/53=15/54=30/55=45
    }

    export async function setLocation(): Promise<void> {
        await browser.wait(ExpectedConditions.elementToBeClickable(Elements.setLocationfield()));
        await Elements.setLocationfield().sendKeys('Main Office');
    }

    export async function clickScheduleButton(): Promise<void> {
        await WaitFor.andClick(Elements.scheduleSignupMeeting());
        await WaitFor.loadSpinner();

        // The load Spinner disappears, but the modal can remain for a second.
        await WaitFor.pageToNotContainElement(Elements.scheduleSignupMeeting());
    }

    export async function completeScheduleSignUpMeeting(): Promise<void> {
        await enterSignupMeetingDate();
        await setSignupMeetingTime();
        await setLocation();
        await clickScheduleButton();
    }
}
