/**
 * @see https://github.com/angular/protractor/blob/master/lib/config.ts
 * @see https://github.com/Marketionist/protractor-cucumber-steps/blob/master/tests/protractor.conf.js
 */
import * as path from "path";
import { browser, Config } from "protractor";

import { absoluteBasePath, jsonPath, Reporter, reportPath } from "../support/reporter";
import { environments } from "./environments";

const baseDir = process.cwd();

const chromeDir = process.env.ChromeWebDriver ||
    (baseDir + "/node_modules/chromedriver/lib/chromedriver/");

const chromePath = path.win32.normalize(chromeDir + "/chromedriver.exe");
console.log(`Chrome Driver path: ${chromePath}`);

const env = process.env.TEST_ENV || "qa";
console.log(`Environment: ${env}`);
const params = environments[env];

export const config: Config = {
    directConnect: true,
    chromeDriver: chromePath,

    baseUrl: params.baseUrl,

    capabilities: {
        browserName: "chrome"
    },

    disableChecks: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/*.feature"
    ],

    onPrepare: () => {
        browser.params = params;
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(path.join(absoluteBasePath, reportPath));
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

    onComplete: () => Reporter.createHTMLReport(env)
};
