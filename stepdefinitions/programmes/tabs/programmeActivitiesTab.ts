import { by, element } from "protractor";

const { Then } = require("cucumber");

Then(/^the 'Activities' tab is saved$/, async () => {
    //Got to be a better way to do this
    await (element(by.css('.success-container[style="opacity: 1; display: block;"]'))).isPresent();
});
