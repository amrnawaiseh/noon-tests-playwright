import { expect, test } from '@playwright/test';
import noonLocators from '../locators/selectors';
import applyfilters from '../utils/applyFilters';

const productName = 'iphone 15';
const url = 'https://www.noon.com/uae-en/';

test.describe('Noon testing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('checkout cart testing', async ({ page }) => {
    const searchBar = page.locator(noonLocators.cartCheckoutTest.serchInput);
    await searchBar.fill(productName);
    await page.keyboard.press('Enter');
    await page.locator(noonLocators.cartCheckoutTest.searchFirstItem).first().click();
    const productTitle = await page.locator(noonLocators.cartCheckoutTest.productTitle).innerText();
    await page.locator(noonLocators.cartCheckoutTest.addToCartBtn).click();
    await page.locator(noonLocators.cartCheckoutTest.checkOutBtn).click();
    await expect(page.locator(noonLocators.cartCheckoutTest.checkOutItemTitle).first()).toHaveText(productTitle);
    await page.getByRole('button', { name: 'remove-item Remove' }).click();
    const cartCounter = page.locator(noonLocators.cartCheckoutTest.cartCounterSelect);
    await expect(cartCounter).toBeHidden();
  });

  test('verify recommended products, add to wishlist pop-up and sign up functionality', async ({ page }) => {
    await page.locator(noonLocators.wishlistTest.wishlistBtn).click();
    await expect(page.locator(noonLocators.wishlistTest.wishlistModal)).toBeVisible();
    await page.getByText('Sign up', { exact: true }).click();
    const input = page.getByPlaceholder('Please enter email address');
    await input.click();
    await input.fill('admin@admin.com');
    await expect(page.locator(noonLocators.wishlistTest.loginBtn)).toBeEnabled();
    await page.locator('#overlay_portal').getByRole('button').first().click();
  });

  test('Verify navbar/electronics section filtering functionality', async ({ page }) => {
    await applyfilters({ page });
    await page.waitForSelector(noonLocators.filteringTest.productDisc);
    const filteredProducts = await page.$$eval(noonLocators.filteringTest.productDisc, (elements) => {
      return elements.map((element) => {
        return element.getAttribute('title');
      });
    });
    filteredProducts.map((product) => {
      expect(product).toContain('256');
    });
  });

  test('verify default location in the nav header based on url', async ({ page }) => {
    await page.locator(noonLocators.locationTest.locationSelect).nth(1).click();
    await expect(page.locator(noonLocators.locationTest.ModalLocationSelect).last()).toHaveText('UAE');
  });

  test('Verify navbar/electronics section sorting', async ({ page }) => {
    await applyfilters({ page });
    await page.locator(noonLocators.filteringTest.sortSelect).nth(0).click();
    await page.locator(noonLocators.filteringTest.priceSortAsc).click();
    await expect(page.locator(noonLocators.filteringTest.productPrice).nth(0)).toBeVisible();
    const productsPrice = await page.locator(noonLocators.filteringTest.productPrice).allTextContents();
    const pricesArr = productsPrice.map((str) => +str.replace(/,/g, ''));
    const sortedPrices = pricesArr.sort((a, b) => a - b);
    expect(pricesArr).toEqual(sortedPrices);
  });
});
