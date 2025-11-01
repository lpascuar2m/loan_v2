import { Page, Locator } from "@playwright/test";
import { BasePage } from './base-page'
import { AccountPageLocators } from '../types/account-types'
  
export class AccountPage extends BasePage {
  
  readonly accountPageLocators: Partial<AccountPageLocators>;

  constructor(page: Page) {
    super(page);
    this.accountPageLocators = {
      company: (companyName: string) => page.getByRole('link', { name: companyName }),
      loanType: page.getByRole('link', { name: 'Loan Types   ' }),
    };
  }

  async clickCompany(name: string) {
    await this.accountPageLocators.company?.(name).click()
  }

  async clickLoanTypes() {
    await this.accountPageLocators.loanType?.click();
  }

}