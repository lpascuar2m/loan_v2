import { Page, Locator } from "@playwright/test";
import { BasePage } from './base-page'

export interface LoginLocators {
  usernameInput: Locator;
  passwordInput: Locator;
  signinButton: Locator;
}

export class LoginPage extends BasePage {
  readonly loginLocators: Partial<LoginLocators>;

  constructor(page: Page) {
    super(page);
    this.loginLocators = {
      usernameInput: page.getByRole("textbox", { name: "Username" }),
      passwordInput: page.getByRole("textbox", { name: "Password" }),
      signinButton: page.getByRole('button', { name: 'Sign In' })
    };
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.loginLocators.signinButton?.click();
  }

  private async enterUsername(username: string) {
    // Validate if username field is visible
    if (this.loginLocators.usernameInput?.isVisible().catch(() => false)) {
      await this.loginLocators.usernameInput.fill(username);
    } else {
      throw new Error("Username input field is not visible");
    }
  }

  private async enterPassword(password: string) {
    try {
      if (this.loginLocators.passwordInput?.isVisible().catch(() => false)) {
        await this.loginLocators.passwordInput.fill(password);
      }
      throw new Error("Password input field is not visible");
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      throw new Error(`Failed to enter password ${errorMessage}`);
    }
  }


}
