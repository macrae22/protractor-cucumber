/**
 * @see https://github.com/angular/protractor/blob/master/lib/config.ts
 * @see https://github.com/Marketionist/protractor-cucumber-steps/blob/master/tests/protractor.conf.js
 * @see https://github.com/browserstack/protractor-browserstack/blob/master/conf/single.conf.js
 */
import * as path from "path";
import { browser, Config } from "protractor";

import { absoluteBasePath, jsonPath, Reporter, reportPath } from "../support/reporter";
import { environments } from "./environments";

const env = process.env.TEST_ENV || "qa";
console.log(`Environment: ${env}`);
const params = environments[env];

export const config: Config = {
    baseUrl: params.baseUrl,

    browserstackKey: process.env.BROWSERSTACK_ACCESS_KEY || 'JwC6WtNtuvmjXmbwF6bH',
    browserstackUser: process.env.BROWSERSTACK_USERNAME || 'darrenhickling1',

    capabilities: {
        build: 'protractor-browserstack',
        browserName: 'Chrome',
        'browserstack.debug': 'true',
        name: 'Bud Systems: Single Browser Tests',
        resolution: '1024x768'
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: [
            'node_modules/cucumber-pretty',
            `json:.${jsonPath}`
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

    onComplete: () => Reporter.createHTMLReport(env),

    onPrepare: () => {
        browser.params = params;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(path.join(absoluteBasePath, reportPath));
    },

    specs: [
        "../../features/*.feature"
    ]
};
