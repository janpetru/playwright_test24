import { test } from "@playwright/test"

test('Login to Tredgate project', async ({ page }) => {

  // const username = 'playwright_jaro24';
  // const password = 'Playwright!2024';
  
  // await page.goto('https://tredgate.com/pmtool')
  // await page.locator('#username').fill(username)
  // await page.locator('#password').fill(password)
  await page.goto('https://tredgate.com/pmtool')
  await page.locator('#username').fill( 'playwright_jaro24')
  await page.locator('#password').fill('Playwright!2024')
  await page.locator(`#login_form > div.form-actions > button`).click();
  // button[type='submit']
  // #forget_password
  // img[title='TEG Project Management']

  // chrome
  // #login_form > dUf-page-logo > img

})
