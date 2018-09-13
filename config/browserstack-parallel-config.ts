/**
 * @see https://github.com/angular/protractor/blob/master/lib/config.ts
 * @see https://github.com/Marketionist/protractor-cucumber-steps/blob/master/tests/protractor.conf.js
 * @see https://github.com/browserstack/protractor-browserstack/blob/master/conf/parallel.conf.js
 */
import { browser, Config } from "protractor";

import { environments } from "./environments";

const env = process.env.TEST_ENV || "qa";
console.log(`Environment: ${env}`);
const params = environments[env];

export const config: Config = {
    baseUrl: params.baseUrl,

    browserstackKey: process.env.BROWSERSTACK_ACCESS_KEY || 'JwC6WtNtuvmjXmbwF6bH',
    browserstackUser: process.env.BROWSERSTACK_USERNAME || 'darrenhickling1',

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: [
            'node_modules/cucumber-pretty'
        ],
        'format-options': '{ "pretty": { "summary": true, "passed": true } }',
        require: [
            "../../stepdefinitions/**/*.ts",
            "../../support/**/*.ts"
        ],
        strict: true
    },

    disableChecks: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    onPrepare: () => {
        browser.params = params;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    },

    specs: [
        "../../features/*.feature"
    ]
};

// Set multiple capabilities in one go.
config.multiCapabilities = ["Chrome", "IE"].map(browserName => ({
    build: 'protractor-browserstack',
    browserName,
    'browserstack.debug': 'true',
    name: 'Bud Systems: Parallel Browser Tests',
    resolution: '1024x768'
}));
