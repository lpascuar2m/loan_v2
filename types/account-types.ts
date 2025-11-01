import { Locator } from '@playwright/test';

export type AccountPageLocators = {
    company: (companyName: string) => Locator;
    loanType: Locator;
}
