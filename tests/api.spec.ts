import { expect, test, request, Page } from '@playwright/test';

const reqPayload = {
  email: 'eve.holt@reqres.in',
  password: 'pistol',
};

test('api testing', async ({ page }) => {
  const apiContext = await request.newContext();
  const apiReq = await apiContext.post('https://reqres.in/api/register', {
    data: reqPayload,
  });
  expect(apiReq.ok()).toBeTruthy();
  const jsonRes = await apiReq.json();
  const token = jsonRes.recommendationToken;

  console.log(apiReq.);
  page.addInitScript((value) => {
    localStorage.setItem('token', value);
  }, token);
});
