import { Page, Locator } from '@playwright/test';

export interface BasePageLocators {
    url: string;
}

export class BasePage {
    page: Page;
    readonly basePageLocators: Partial<BasePageLocators>
    

    constructor(page: Page) {
        this.page = page;
        this.basePageLocators = {
            url: 'https://zbsi.qa.zalamea.ph/#/login'
        }
    }

    async gotoWebsite() {
        await this.page.goto(this.basePageLocators.url!)
    }
}