import test from "@playwright/test";
import { LoginPage } from "../../page-objects/pmtool/login_page";
import { HomePage } from "../../page-objects/pmtool/home_page";


test('Page objects test', async ({ page }) => {
  const username = 'playwright_jaro24'
  const password = 'Playwright!2024'

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.openPmTool();
  await loginPage.fillUserName(username);
  await loginPage.fillPasswordName(password);
  await loginPage.clickLogin();
  await homePage.clickProfile();
  await homePage.clickLogoff();
})
