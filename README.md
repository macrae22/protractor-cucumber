# Bud Smoke Tests

[![Build status](https://budsystems.visualstudio.com/_apis/public/build/definitions/b1ec7a56-2027-42bb-9902-59520aa93c83/62/badge)](https://budsystems.visualstudio.com/Bud/Bud%20Team/_build/index?context=mine&path=%5C&definitionId=62&_a=completed 'Smoke Tests builds')

## Repository

https://budsystems.visualstudio.com/Bud/Bud%20Team/_git/Chorus.Bud.SmokeTests?_a=readme

## Introduction

See this [article][article] on how this project was initially set up.

## Features

* No `typings.json` or `typings` folder, they have been replaced by `@types` modules in `package.json`.
* `ts-node` (TypeScript execution environment for node) in cucumberOpts.
* All scripts written with > Typescript2.0 & Cucumber2.0.
* Neat folder structures with transpiled JavaScript files in separate output folder.
* Page Object design pattern implementation.
* Extensive hooks implemented for `BeforeFeature`, `AfterScenario`, etc.
* Screenshots on feature failure scenarios.

## Get Started

### Pre-requisites

1. NodeJS: `choco install nodejs-lts`
1. A code editor: `choco install vscode`

### Setup

* Clone the repository into a folder.
* Go inside the folder and run following command from terminal/command prompt: `npm install`
* All the dependencies from `package.json` and ambient typings will be installed in the `node_modules` folder.

### Run Scripts

* Transpile `.ts` files to `.js`: `npm run build`
* Run the tests against QA simply with: `npm test`
* That's it! Look at the `scripts` section of `package.json` to find other test scripts.

![result][cucumberconsole]

## Contributing

### Writing Features

```
Feature: To search typescript in google
@TypeScriptScenario

  Scenario: Typescript Google Search
    Given I am on google page
    When I type "Typescript"
    Then I click on search button
    Then I clear the search text
```

### Writing Step Definitions

```typescript
import { browser } from "protractor";
import { SearchPageObject } from "../pages/searchPage";
const { Given } = require("cucumber");
import { expect } from 'chai';

const search = new SearchPageObject();

Given(/^I am on google page$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("Google");
});
```

### Writing Page Objects

```typescript
import { $ } from "protractor";

export class SearchPageObject {
    public searchTextBox: any;
    public searchButton: any;

    constructor() {
        this.searchTextBox = $("#lst-ib");
        this.searchButton = $("input[value='Google Search']");
    }
}
```

### Improving Code Quality

Simply run `.\lint.ps1` to show any code quality issues with the codebase. Adding the fix flag,
`.\lint.ps1 -Fix`, will fix problems _and_ update files! Use `Get-Help .\lint.ps1` for more info.

## Configuration

### Cucumber Hooks

The following method takes screenshot on failure of each scenario:

```typescript
After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG.
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
```

### CucumberOpts Tags

The following configuration shows to call specific tags from feature files:

```typescript
cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
    strict: true,
    tags: "@TypeScriptScenario or @CucumberScenario or @ProtractorScenario"
}
```

### HTML Reports

This project has been integrated with [cucumber-html-reporter][reporter], which is generated in the `reports` folder when you run `npm test`. The current reports per environment are:

* **Develop**: [report][devreport]

[article]: https://medium.com/@igniteram/e2e-testing-with-protractor-cucumber-using-typescript-564575814e4a "Medium article"
[cucumberconsole]: https://raw.githubusercontent.com/igniteram/protractor-cucumber-typescript/master/images/protractor-cucumber-typescript-result.gif "Cucumber console"
[devreport]: https://developchorusbudstorage.blob.core.windows.net/protractor/index.html  "Bud Cucumber Dev Report"
[reporter]: https://github.com/gkushang/cucumber-html-reporter "cucumber-html-reporter"
