import noonLocators from '../locators/selectors';

/**
 * Apply filters over product selected product
 *
 * @param {Object} page - Playwright page
 */

const applyfilters = async ({ page }) => {
  await page.locator(noonLocators.filteringTest.mobileCategory).click();
  await page.locator(noonLocators.filteringTest.iphoneCategory).nth(0).click();
  await page.locator('[data-qa="Condition"]').getByText('New', { exact: true }).click();
  await page.locator(noonLocators.filteringTest.yearCheckBox('2022')).click();
  await page.locator(noonLocators.filteringTest.networkCheckBox).click();
  await page.locator(noonLocators.filteringTest.blackCheckBox).click();
  await page.locator(noonLocators.filteringTest.gbCapacityCheck).click();
};

export default applyfilters;
