import test, { expect } from "@playwright/test";

test("Assert response 200 OK", async ({ request }) => {
  const url = 'https://tegb-backend-877a0b063d29.herokuapp.com/train'
  const response = await request.get(url)
  expect(response.status()).toBe(200);
});

test("Assert response header", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const headers = response.headers();
  const contentType = headers['content-type'];
  expect(contentType).toBe(`application/json; charset=utf-8`)
  expect(contentType).toContain('application/json')
});

test("Assert response body", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json();
  expect(responseBody.id).toBeDefined();
  expect(typeof responseBody.id).toBe('number');
  expect(responseBody.message).toBe(`TEG#B Training GET request successful`)
});

test("Assert response patch body", async ({ request }) => {
  const url = 'https://tegb-backend-877a0b063d29.herokuapp.com/train'

  const response = await request.patch(url);
  const responseBody = await response.json();
  expect(typeof responseBody.timestamp ).toBe('string');
});