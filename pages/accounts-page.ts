import { Page, Locator } from "@playwright/test";
import { BasePage } from './base-page'

export interface AccountPageLocators {
    company: (companyName: string) => Locator;
}

export class AccountPage extends BasePage {
  readonly accountPageLocators: Partial<AccountPageLocators>;

  constructor(page: Page) {
    super(page);
    this.accountPageLocators = {
      company: (companyName: string) => page.getByRole('link', { name: companyName })
    };
  }

  async clickCompany(name: string) {
    await this.accountPageLocators.company?.(name).click()
  }
}