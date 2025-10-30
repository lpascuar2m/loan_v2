import { test, expect } from "../fixtures/loan-fixtures";
import * as allure from "allure-js-commons";
import { Severity } from "allure-js-commons";

test("@feature#1786", async ({
  page,
  loginPage,
  accountPage,
  navigationPage,
}) => {
  allure.parentSuite("Loan V2 Tests");
  allure.suite("For System Testing");
  allure.subSuite("CITI Internal Loans Reports");
  allure.owner("Lenard QA");
  allure.severity(Severity.NORMAL);

  await expect(async () => {
    await allure.step("Login to Loan v2", async () => {
      await loginPage.gotoWebsite();
      await loginPage.login("", "");
    });

    await allure.step("Navigate to Account Page", async () => {
      await navigationPage.navigateAccountPage();
    });

    await allure.step(
      "Click TechTrove Innovations",
      async () => {
        await accountPage.clickCompany("TechTrove Innovations");
      }
    );

    await allure.step(
      "Navigate to Loan Types and Click TechTrove Safe Loan",
      async () => {
        await accountPage.clickLoanTypes();
        await accountPage.clickCompany("TechTrove Safe Loan");
      }
    );

    await allure.step(
      "Check if Internal Loans is set as Amortization Format",
      async () => {
        const internalLoans = page.getByText("Internal Loans");
        await expect(internalLoans).toBeVisible();
      }
    );
  }).toPass();
});
