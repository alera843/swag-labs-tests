var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'cucumber_report.json',
        output: 'cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        name: "Test",
        storeScreenshots: true,
        noInlineScreenshots: true,
        brandTitle: "Cucumber automatic tests",
        screenshotsDirectory: "./screenshots/",
        metadata: {
            "App Version":"0.1.0",
            "Test Environment": "Prod - https://www.saucedemo.com/",
            "Browser": "Chrome  Version 117.0.5938.88 (Official Build) (64-bit)",
            "Platform": "Linux Ubuntu 20.04",
            "Parallel": "Scenarios",
            "Executed": "Local System"
        },
        failedSummaryReport: true,
    };

    reporter.generate(options);