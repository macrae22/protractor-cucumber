import { element, by, browser, ExpectedConditions } from "protractor/built";

export default class EditEmployerLocationOverviewPage {
    private readonly elements = {
        postcodeLookupField: element(by.css('input[placeholder="e.g. SW14 5HG"]')),
        findAddressButton: element(by.css('button.btn.btn-formgroup.secondary')),
        addressLine1Field: element(by.css('input[formcontrolname="line1"]')),
        addressLine2Field: element(by.css('input[formcontrolname="line2"]')),
        addressLine3Field: element(by.css('input[formcontrolname="line3"]')),
        townOrCityField: element(by.css('input[formcontrolname="postTown"]')),
        postcodeField: element(by.css('input[formcontrolname="postcode"]')),
        typeOfLocationField: element(by.css('input[formcontrolname="typeOfLocation"]'))

    };

    public async postcodeLookup() {
        //Wait for and enter a 'Postcode'
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.postcodeLookupField), 10000);
        await this.elements.postcodeLookupField.sendKeys('WR5 3DA');

        //Wait for and click 'Find Address' button
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.postcodeLookupField), 10000);
        await this.elements.findAddressButton.click();

        //Select an address from dropdown results
        await browser.wait(ExpectedConditions.elementToBeClickable(element(by.css('option[value="1: Object"]'))), 10000);
        await element(by.css('option[value="1: Object"]')).click();
        return this;
    }

    public async enterAddressLine1() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addressLine1Field), 10000);
        await this.elements.addressLine1Field.clear();
        await this.elements.addressLine1Field.sendKeys(`Edited Address Line1`);
        return this;
    }

    public async enterAddressLine2() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addressLine2Field), 10000);
        await this.elements.addressLine2Field.clear();
        await this.elements.addressLine2Field.sendKeys(`Edited Address Line2`);
        return this;
    }

    public async enterAddressLine3() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.addressLine3Field), 10000);
        await this.elements.addressLine3Field.clear();
        await this.elements.addressLine3Field.sendKeys(`Edited Address Line3`);
        return this;
    }

    public async enterTownOrCity() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.townOrCityField), 10000);
        await this.elements.townOrCityField.clear();
        await this.elements.townOrCityField.sendKeys(`Bristol`);
        return this;
    }

    public async enterPostcode(postcode = 'WR5 3DA') {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.postcodeField), 10000);
        await this.elements.postcodeField.clear();
        await this.elements.postcodeField.sendKeys(postcode);
        return this;
    }

    public async enterTypeOfLocation() {
        await browser.wait(ExpectedConditions.elementToBeClickable(this.elements.typeOfLocationField), 10000);
        await this.elements.typeOfLocationField.clear();
        await this.elements.typeOfLocationField.sendKeys(`Edited Head Office`);
        return this;
    }

    public async editEmployerOverview() {
        await this.enterPostcode();
        await this.enterTypeOfLocation();
    }
}
