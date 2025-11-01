import { Page } from '@playwright/test';
import { BasePage } from './base-page';
import { LoanLedgerLocators, CreateLoanLedgerValues } from '../types/ledger-types';

export class LedgerPage extends BasePage {

    readonly loanLedgerLocators: Partial<LoanLedgerLocators>;

    constructor(page: Page) {
        super(page);
        this.loanLedgerLocators = {
        };
    }
}