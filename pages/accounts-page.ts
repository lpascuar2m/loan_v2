import { Page, Locator } from "@playwright/test";
import { BasePage } from './base-page'
import { 
  AccountPageLocators, 
  LoanLedgerLocators, 
  LoanLedgerValues } from "../types/account-types";
  
export class AccountPage extends BasePage {
  
  readonly accountPageLocators: Partial<AccountPageLocators>;
  readonly loanLedgerLocators: Partial<LoanLedgerLocators>;

  constructor(page: Page) {
    super(page);
    this.accountPageLocators = {
      company: (companyName: string) => page.getByRole('link', { name: companyName }),
      loanType: page.getByRole('link', { name: 'Loan Types   ' }),
    };
    this.loanLedgerLocators = {
      loanLegder: page.getByRole('link', { name: 'Loan Types   ' }),
    }
  }

  async clickCompany(name: string) {
    await this.accountPageLocators.company?.(name).click()
  }

  async clickLoanTypes() {
    await this.accountPageLocators.loanType?.click();
  }

  async createLoanLedger(values: Partial<LoanLedgerValues>) {
  for (const [key, value] of Object.entries(values)) {
    const locator = this.loanLedgerLocators[key as keyof LoanLedgerLocators];

    if (typeof value === 'string' && locator) {
      await locator?.fill(value); 
    }
  }
}

}