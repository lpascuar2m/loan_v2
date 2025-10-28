import { Page, Locator } from '@playwright/test';

export interface NavigationPageLocators {
    homePage: Locator;
    accountPage: Locator;
}

export class NavigationPage {
    readonly navigationPageLocators: Partial<NavigationPageLocators>;

    constructor(page: Page) {
        this.navigationPageLocators = {
            homePage: page.getByRole('link', { name: ' Home' }),
            accountPage: page.getByRole('link', { name: ' Accounts' }),
        }
    }

    async navigateHomePage() {
        await this.navigationPageLocators.homePage?.click()
    }

    async navigateAccountPage() {
        await this.navigationPageLocators.accountPage?.click();
    }
}