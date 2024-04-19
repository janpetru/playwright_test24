import { expect, type Locator, type Page } from "@playwright/test";
import { LoginFluentPage } from "./login_fluent_page";

export class HomeFluentPage {
  readonly page: Page;
  readonly logOffButton: Locator;
  readonly alertIcon: Locator;
  readonly contentTitle: Locator;
  readonly profileImage: Locator;

  // * Horní lišta
  readonly profileButton: Locator;
  public headerTitle: Locator;
  public bellIcon: Locator;

  // * Levé menu
  public logo: Locator;
  public dashboard: Locator;
  public projects: Locator;
  public users: Locator;
  public reports: Locator;
  public configuration: Locator;
  public applicationStructure: Locator;
  public extension: Locator;
  public tools: Locator;
  public documentation: Locator;

  // * Obsah
  public contentHeader: Locator;
  public firstParagraph: Locator
  public secondParagraph: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("//li[@id='user_dropdown']");
    const profileSelector = "//li[@id='user_dropdown']";

    this.logOffButton = page.locator("//li[@id='logout']");
    this.alertIcon = page.locator(".fa-bell-o");
    

    // * Horní lišta
    this.profileButton = page.locator(profileSelector);
    this.headerTitle = page.locator("//a[@class='navbar-brand']");
    this.bellIcon = page.locator(
      "//a[@class='dropdown-toggle']//i[@class='fa fa-bell-o']"
    );
    this.logOffButton = page.locator("//li[@id='logout']");
    this.contentTitle = page.locator("//h3[@id='welcome-page-header']");
    this.profileImage = page.locator(`${profileSelector}//img`);

    // * Levé menu
    this.logo = page.locator("//img[@title='TEG Project Management']");
    this.dashboard = page.locator("//li[@id='dashboard']//span");
    this.projects = page.locator("//li[@id='Projects']//span");
    this.users = page.locator("//li[@id='Users']//span");
    this.reports = page.locator(
      "//li[@id='Reports']//span[contains(@class,'submenu-level-0')]"
    );
    this.configuration = page.locator(
      "//li[@id='Configuration']//span[contains(@class,'submenu-level-0')]"
    );
    this.applicationStructure = page.locator(
      "//li[@id='Application Structure']//span[contains(@class,'submenu-level-0')]"
    );
    this.extension = page.locator("//li[@id='Extension']//span");
    this.tools = page.locator(
      "//li[@id='Tools']//span[contains(@class,'submenu-level-0')]"
    );
    this.documentation = page.locator(
      "//li[@id='Documentation']//span[contains(@class,'submenu-level-0')]"
    );

    // * Obsah
    this.contentHeader = page.locator("//h3[@id='welcome-page-header']");
    this.firstParagraph = page.locator(
      "//h3[@id='welcome-page-header']//..//p[1]"
    );
    this.secondParagraph = page.locator(
      "//h3[@id='welcome-page-header']//..//p[2]"
    );
  }
  async waitOnPage(): Promise<HomeFluentPage> {
    await expect(this.contentTitle).toBeVisible();
    await expect(this.profileImage).toBeVisible();
    return this;
  }
  async clickProfile(): Promise<HomeFluentPage> {
    await expect(this.alertIcon).toBeVisible();
    await this.profileButton.click();
    return this;
  }

  async clickLogoff(): Promise<LoginFluentPage> {
    await this.logOffButton.click();
    return new LoginFluentPage(this.page);
  }
}