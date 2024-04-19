import test from "@playwright/test";
import { LoginFluentPage } from "../../page-objects/fluent/login_fluent_page";

test('PMTool Login, logout via Fluent interface', async ({ page }) => {
  const username = 'playwright_jaro24'
  const password = 'Playwright!2024'

  await new LoginFluentPage(page)
    .openPmTool()
    .then(page => page.fillUserName(username))
    .then(page => page.fillPasswordName(password))
    .then(page => page.clickLogin())
    .then(page => page.clickProfile())
    .then(page => page.clickLogoff());
})
