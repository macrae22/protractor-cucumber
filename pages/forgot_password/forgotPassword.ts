import { element, by, browser, ExpectedConditions } from "protractor/built";

export default class ForgotPassword {
    private readonly elements = {
        emailAddressField: element(by.css('input[formcontrolname="email"]')),
        resetButton: element(by.cssContainingText('.btn', 'Reset')),
        checkYourEmailHeading: element(by.tagName('h1')),
        returnToLoginLink: element(by.cssContainingText('.primaryColour', 'Return to Log in')),
        errorMessage: element(by.css('.form-control-feedback'))
    };

    //Cannot use this method as the 'title' currently uses the URL of the page
    public async isOnPage() {
        // Waits for the URL to contain '/forgotpassword' before checking page title
        await browser.wait(ExpectedConditions.urlContains('/forgotpassword'), 10000);
        return (await browser.getTitle()) === "Forgotten Password";
    }

    public async emailHeading() {
        // We need to wait for the text to change in the 'h1' tag as it's on the same page
        // IE - <h1>Reset Password</h1> changes to <h1>Check your email</h1>
        await browser.wait(ExpectedConditions.not(ExpectedConditions.textToBePresentInElement(this.elements.checkYourEmailHeading, 'Reset Password')));
        return (await this.elements.checkYourEmailHeading.getText()) === 'Check your email';
    }

    public async emptyEmailErrorMessage() {
        // Gets text from element and then we do a camparison (returns true/fasle)
        await browser.wait(ExpectedConditions.presenceOf(this.elements.errorMessage));
        return (await this.elements.errorMessage.getText()) === "'Email' should not be empty.";
    }

    public async enterEmailAddress() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.emailAddressField));
        await this.elements.emailAddressField.sendKeys('assessor@automationtests.com');
        return this;
    }

    public async clickReset() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.resetButton));
        await this.elements.resetButton.click();
        return this;
    }

    public async clickReturnToLogin() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.returnToLoginLink));
        await this.elements.returnToLoginLink.click();
    }
}
