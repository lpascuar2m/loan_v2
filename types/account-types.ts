import { Locator } from '@playwright/test';

export type AccountPageLocators = {
    company: (companyName: string) => Locator;
    loanType: Locator;
}

export type LoanLedgerLocators = {
  loanLegder: Locator;
}

export type LoanLedgerValues = {
  loanledger: string
}