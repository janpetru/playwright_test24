import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logOffButton: Locator;
  readonly alertIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("//li[@id='user_dropdown']");
    this.logOffButton = page.locator("//li[@id='logout']");
    this.alertIcon = page.locator(".fa-bell-o");
  }

  async clickProfile() {
    await expect(this.alertIcon).toBeVisible();
    await this.profileButton.click();
  }

  async clickLogoff() {
    await this.logOffButton.click();
  }
}