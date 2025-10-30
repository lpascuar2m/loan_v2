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

  static Role = {
    Admin: {
      username: process.env.ADMIN_USERNAME!,
      password: process.env.ADMIN_PASSWORD!
    }
  } as const;

  async login(role: keyof typeof LoginPage.Role) {
    const credential = LoginPage.Role[role];

    await this.enterUsername(credential.username);
    await this.enterPassword(credential.password);
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
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : String(e);
      throw new Error(`Failed to enter password ${errorMessage}`);
    }
  }


}
