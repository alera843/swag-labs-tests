# Testing Project README

## Introduction

This repository contains a testing project for the website https://www.saucedemo.com/. This is a technical task by FFW. The project uses the Cucumber testing framework with JavaScript, Chai for assertions, and Puppeteer for browser automation.

## Prerequisites
    
Before you can run the tests, ensure you have the following prerequisites installed on your system:

- Node.js: You need Node.js to run JavaScript and npm (Node Package Manager) for managing dependencies. Download and install Node.js from https://nodejs.org/. Version 14 or more.

- npm Packages: Once Node.js is installed, navigate to your project directory in the terminal and run the following command to install the necessary packages:

`npm install`

This command will read the package.json file and install all the dependencies required for the project.

- IDE (the one that I use is VS Code)

## Project Structure

The project structure should look like this:

```
project-root/
│
├── features/
│   ├── lib/
│   ├── support/
│   └── tests/
│
├── .git/
│
├── node_modules/
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── ...

```

## Running Tests

To run all the tests, use the following command:

`npm run test`

To run only selected test(s) add to the tests you want to run @focus and then use the following command:

`npm run test:focus`

To generate an html report for the tests, use the following command:

`npm run generate:report`

The html report can be genereted after test(s) are run with previous commands and executed successfully.

These scripts are included in the package.json file.

