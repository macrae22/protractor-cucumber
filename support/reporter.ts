import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";

export const absoluteBasePath = process.cwd();
export const reportPath = "/reports/";

export const jsonPath = path.join(reportPath, "report.json");
const htmlPath = path.join(reportPath, "index.html");

const cucumberReporterOptions = {
    jsonFile: path.join(absoluteBasePath, jsonPath),
    output: path.join(absoluteBasePath, htmlPath),
    reportSuiteAsScenarios: true,
    theme: "bootstrap",
    name: "Bud",
    brandTitle: "Smoke Test Report",
    metadata: {
        Browser: "Chrome",
        Parallel: "Scenarios",
        Platform: "VSTS: VS Hosted 2017",
        "Test Environment": ""
    }
};

export class Reporter {
    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static createHTMLReport(env: string) {
        cucumberReporterOptions.metadata["Test Environment"] = env.toUpperCase();

        try {
            reporter.generate(cucumberReporterOptions);
        } catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results.");
            }
        }
    }
}
