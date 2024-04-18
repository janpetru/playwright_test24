import test, { expect } from "@playwright/test";

test.describe('PM too loging tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("http://tredgate.com/pmtool/");
    // await expect(page.locator("#username")).();
  })

  test.fixme("Successful login", async ({ page }) => {
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator("//button[@type='submit']").click();
    await expect(page.locator("//h3[@id='welcome-page-header']")).toBeVisible();
  });

  test("Failed login", async ({ page }) => {
    await page.locator("#username").fill("random string");
    await page.locator("#password").fill("123454");
    await page.locator("//button[@type='submit']").click();
    await expect(
      page.locator("//div[@class='alert alert-danger']")
    ).toBeVisible();
  });
});
