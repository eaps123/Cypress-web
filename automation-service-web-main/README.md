# Project Automation Service WEB

![Project Logo](images/service-logo.jpg)

## Overview

Welcome to the automated testing project! This repository harnesses the power of Cypress and BrowserStack to automate end-to-end tests for a modern web application. The primary goal is to ensure seamless functionality across multiple browsers and devices, validating key user interactions and scenarios.

### Key Objectives

- **Robust Testing Suite**: Leveraging Cypress, the project aims to build a comprehensive suite of tests covering critical functionalities of the web application.
- **Cross-Browser Compatibility**: Utilizing BrowserStack, we ensure that the application behaves consistently across various browsers and device configurations.
- **Maintainable and Scalable**: JavaScript is employed to write the tests, ensuring maintainability and scalability as the project evolves.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [GIT](#git)
- [Dependencies](#dependencies)
- [Browserstack](#browserstack)
- [Execution Cypress Dashboard](#execution-cypress-dashboard)

## Features

- **Cypress Integration**: Harnesses Cypress for end-to-end testing. Read more about Cypress [here](https://docs.cypress.io/guides/overview/why-cypress.html).
- **BrowserStack Configuration**: Integrates BrowserStack for comprehensive cross-browser testing. Learn more about BrowserStack [here](https://automate.browserstack.com/dashboard/v2/builds).
- **JavaScript**: Written in JavaScript to facilitate test automation and maintenance.
- **Gitlab**: Integration CI Read more about [here](https://gitlab.com/zenvia/service/automation/automation-service-web)

## Setup

### Prerequisites

- Node.js installed [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- BrowserStack account credentials
  - Open a call for the responsible teams
- Cypress installed [here](https://www.npmjs.com/package/cypress)

- Gitlab account credentials

  - Open a ticket with the profile (GITLAB_SERVICE_AUTOMATION_DEVELOPER)

## **GIT**

1. **Clone the Repository**

   ```bash
   git clone git@gitlab.com:zenvia/service/automation/automation-service-web.git

## **Dependencies**

1. **Install NPM dependecies**

    ```bash
    cd C:\workspace\automation-cypress-web
    npm i
    ```

## **Browserstack**

- Review the BrowserStack documentation [here](https://www.browserstack.com/docs/) to configure additional settings or specific browser/device testing.

- **Execute local with Browserstack:**
  
  - {
      "auth": {
      "username": "<#username>",
      "access_key": "<#access-key>"
    },
  }

  Add the code above to the browserstack.json file. With this, Browserstack can be used locally.

- To run the tests, use the following command:

    ```bash
    npx browserstack-cypress run
    ```

    This command will run all the project's tests in browsersatck.

- You can use parameters to run a specific test in a specific environment. As per the example below:

    ```bash
    npx browserstack-cypress run --env configFile=$ENV,grepTags=$TAGS
    ```

- Example: npx browserstack-cypress run --env configFile=canary,grepTags=@login

  - It will be run on the local machine and sent to the Browserstack cloud.

    ![Alt text](/images/bs-exec.jpg)

## **Execution Cypress Dashboard**

- To run the tests, use the following command [here](https://docs.cypress.io/guides/getting-started/opening-the-app)

- Cypress

  - Using npx

  ```bash
    npx cypress open
  ```

  - Using yarn

    ```bash
      npx cypress open
    ```

  - Open
  
  ![Alt text](/images/exec-test.gif)

  - Note the environment in which the tests are running by default today is "canary".
  If it is necessary to run in another environment, open the dashboard with the desired environment:

    - staging
    - canary
    - prd

    Example execution in staging:

    ```bash
    npm run open:staging
    ```

  **OBS: If you are going to run the tests more than once, you must click on "Clear All Sessions", as we use the session at login to run more than once without having to relog.**

## **Execution Cypress Command**

- Cypress Command:

  - Using npx

  ```bash
    npx cypress run
  ```

    **OBS: This command will run all project tests without running any dashboard in Browserstack.**
