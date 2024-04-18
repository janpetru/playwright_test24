import test from "@playwright/test";

test('Click test', async ({ page }) => {
  await page.goto('https://tredgate.com/pmtool')
  await page.locator('#username').fill('playwright_jaro24')
  await page.locator('#password').fill('Playwright!2024')
  await page.locator(`button[type='submit']`).click();
  await page.locator(`#Projects`).click();
  await page.locator(`//a[@class='menu-itemsitems21']`).click();
})

test('Fill and pressSequentially test', async ({ page }) => {
  await page.goto('https://tredgate.com/pmtool')
  await page.locator('#username').fill('Start');
  await page.locator('#username').fill('End');
  await page.locator('#username').pressSequentially('Whats going on?')
})

test('Select test', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  await page.locator('#dropdowm-menu-1').selectOption('sql');
  await page.locator('#dropdowm-menu-2').selectOption({label: 'TestNG'});
})

test('Check box radio button', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  await page.locator(`//input[@value='option1']`).check();
  await page.locator(`//input[@value='orange']`).setChecked(true);
  await page.locator(`//input[@value='option1']`).uncheck();
})

test('Fill registration', async ({ page }) => {
  await page.goto('https://tredgate.com/webtrain/registration.html');
  await page.locator('#name').pressSequentially('John Doe');
  await page.locator('#datepicker').fill('2000-01-01');
  await page.locator('#email').fill('john@example.com');
  await page.locator('#password').fill('Playwright!2024')
  await page.locator('#confirm-password').pressSequentially('Playwright!2024')
  await page.locator(`#basic`).setChecked(true);
  await page.locator(`#age`).pressSequentially('19')
  await page.locator('#gender').selectOption('Male');
  await page.locator('#address').pressSequentially('Street 01 Japan 10000');
  await page.locator(`#interests-music`).setChecked(true);  
  
})

test('iFrame test', async ({ page }) => {
  await page.goto('https://www.webdriveruniversity.com/IFrame/index.html');
  const frame = await page.frameLocator('#frame');
  await frame.locator('#button-find-out-more').click();
})

test("Hover test", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  // ? Po kliknutí na list-alert tlačítko se zobrazí alert, kódem page.on jej vypíšeme (do console) a zavřeme
  page.on("dialog", async (dialog) => {
    console.log("Alert message:", dialog.message());
    await dialog.dismiss(); // Closes the dialog without clicking anything
  });
  await page
    .locator('//div[@class="dropdown hover"]//button[@class="dropbtn"]')
    .hover();
  await page
    .locator('//div[@class="dropdown hover"]//a[@class="list-alert"]')
    .click();
});

