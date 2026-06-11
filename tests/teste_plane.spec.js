import { test, expect } from '@playwright/test';
import { amazonPageElements } from './page_object';

test('Consultar produto Monitor 24 Polegadas', async ({ page }) => {
  
  //variables
  const { amazonLink, searchBox, searchButton, searchResultsHeading, productLink, productHeading, inStock } = amazonPageElements(page);
  const productQuery = "monitor 24 polegadas";

  //navigate to page
  await page.goto(amazonLink);

  //search product
  await searchBox.fill(productQuery);
  await searchButton.click();

  //search results
  await searchResultsHeading.isVisible();
  await productLink.isVisible();

  //open product
  await productLink.click();

  //validate search result
  await inStock.isVisible();
  await productHeading.isVisible();

});
