import { test, expect } from "../fixtures/loan-fixtures";
import { Severity } from "allure-js-commons";
import * as allure from 'allure-js-commons';

test.describe("@feature#1788", () => {

  test("", async ({ loginPage, navigationPage, page }) => {

    allure.parentSuite("Loan V2 Tests");
    allure.suite("For System Testing");
    allure.subSuite("Loan Register Report");
    allure.owner("Lenard QA");
    allure.severity(Severity.CRITICAL);

    await allure.step('Go to loan v2 website', async () => {
        await loginPage.gotoWebsite();
    });

    await allure.step('Assert that actual title is same with expected title', async () => {
        const actualTitle = await page.title();
        const expectTitle = "Individual Retirement Account - Fund Application";

        expect(actualTitle).toBe(expectTitle);
    });

  });
});
