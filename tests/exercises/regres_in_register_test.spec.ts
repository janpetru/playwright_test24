import test from "@playwright/test";
import { faker } from '@faker-js/faker';

test('POST test ukol', async ({ request }) => {
  const url = 'https://reqres.in/api/register';
  const body = {
    email: "eve.holt@reqres.in",
    password: "pistol"
  }
  await request.post(url, {
    headers: {
      "Accept-Encoding": 'gzip, deflate, br'
    },
    data: body,
  })
})
