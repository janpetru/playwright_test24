import { type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool";
  readonly userNameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator(`button[type='submit']`);
  }

  async openPmTool() {
    await this.page.goto(this.url);
  }

  async fillUserName( username: string) {
    await this.userNameInput.fill(username);
  }

  async fillPasswordName( password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username: string, password: string ) {
    this.openPmTool()
    this.fillUserName(username)
    this.fillPasswordName(password)
    this.clickLogin()
  }
}