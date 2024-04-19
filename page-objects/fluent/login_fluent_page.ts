import { HomeFluentPage } from './home_fluent_page';
import { type Locator, type Page } from "@playwright/test";

export class LoginFluentPage {
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

  async openPmTool(): Promise<LoginFluentPage> {
    await this.page.goto(this.url);
    return this;
  }

  async fillUserName( username: string): Promise<LoginFluentPage> {
    await this.userNameInput.fill(username);
    return this;

  }

  async fillPasswordName( password: string): Promise<LoginFluentPage> {
    await this.passwordInput.fill(password);
    return this;

  }

  async clickLogin() {
    await this.loginButton.click();
    return new HomeFluentPage(this.page);
  }

  // async login(username: string, password: string ) {
  //   this.openPmTool()
  //   this.fillUserName(username)
  //   this.fillPasswordName(password)
  //   this.clickLogin()
  // }
}