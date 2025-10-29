import { test as base } from "@playwright/test";
import { BasePage } from "../pages/base-page";
import { AccountPage } from "../pages/accounts-page";
import { LoginPage } from "../pages/login-page";
import { NavigationPage } from '../pages/navigation-page'

type LoanFixtures = {
  basePage: BasePage;
  accountPage: AccountPage;
  loginPage: LoginPage;
  navigationPage: NavigationPage;
};

const test = base.extend<LoanFixtures>({
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
});


export { expect } from '@playwright/test'