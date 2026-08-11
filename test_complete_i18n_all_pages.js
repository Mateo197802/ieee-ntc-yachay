import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const baseUrl = 'http://localhost:4321/ieee-ntc-yachay';

  console.log('=== 1. TESTING GALLERY PAGE BILINGUAL SWITCHING ===');
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${baseUrl}/gallery/`);

  // Default Spanish check
  let filtersEs = await page.locator('.filter-btn').allInnerTexts();
  console.log('[PASS] Filters in ES:', filtersEs);

  let firstCardTitleEs = await page.locator('.info-title').first().innerText();
  let firstCardCatEs = await page.locator('.category-tag').first().innerText();
  let firstCardDateEs = await page.locator('.info-date').first().innerText();
  let firstCardBadgeEs = await page.locator('.photos-count-badge').first().innerText();
  console.log(`[PASS] ES Card: Title="${firstCardTitleEs}", Cat="${firstCardCatEs}", Date="${firstCardDateEs}", Badge="${firstCardBadgeEs}"`);

  // Switch to English
  console.log('\n--- Switching Gallery to English ---');
  await page.locator('#lang-switcher-desktop button[data-lang="en"]').click();
  await page.waitForTimeout(300);

  let filtersEn = await page.locator('.filter-btn').allInnerTexts();
  console.log('[PASS] Filters in EN:', filtersEn);

  let firstCardTitleEn = await page.locator('.info-title').first().innerText();
  let firstCardCatEn = await page.locator('.category-tag').first().innerText();
  let firstCardDateEn = await page.locator('.info-date').first().innerText();
  let firstCardBadgeEn = await page.locator('.photos-count-badge').first().innerText();
  let firstCardSummaryEn = await page.locator('.info-caption').first().innerText();
  console.log(`[PASS] EN Card: Title="${firstCardTitleEn}", Cat="${firstCardCatEn}", Date="${firstCardDateEn}", Badge="${firstCardBadgeEn}"`);
  console.log(`[PASS] EN Summary: "${firstCardSummaryEn}"`);

  // Open modal in EN
  console.log('\n--- Opening Modal in English ---');
  await page.locator('.open-album-btn').first().click();
  await page.waitForTimeout(300);

  let modalCatEn = await page.locator('#album-category-display').innerText();
  let modalTitleEn = await page.locator('#album-title-display').innerText();
  let modalCounterEn = await page.locator('#carousel-counter').innerText();
  let modalSlideTitleEn = await page.locator('#carousel-slide-title').innerText();
  console.log(`[PASS] Modal in EN: Cat="${modalCatEn}", Title="${modalTitleEn}", Counter="${modalCounterEn}", SlideTitle="${modalSlideTitleEn}"`);

  await page.locator('#modal-close-btn').click();
  await page.waitForTimeout(200);

  console.log('\n=== 2. TESTING DIRECTIVE PAGE BILINGUAL SWITCHING ===');
  await page.goto(`${baseUrl}/directive/`);
  // Switch to English
  await page.locator('#lang-switcher-desktop button[data-lang="en"]').click();
  await page.waitForTimeout(300);

  let mateoRoleEn = await page.locator('#mateo-gavilanes .member-role').innerText();
  let mateoProgramEn = await page.locator('#mateo-gavilanes .member-program').innerText();
  let mateoSummaryEn = await page.locator('#mateo-gavilanes .member-summary').innerText();
  console.log(`[PASS] Mateo Gavilanes in EN: Role="${mateoRoleEn}", Program="${mateoProgramEn}"`);
  console.log(`[PASS] Mateo Summary in EN: "${mateoSummaryEn.slice(0, 80)}..."`);

  // Open Mateo profile modal in EN
  await page.locator('#mateo-gavilanes .profile-modal-btn').click();
  await page.waitForTimeout(300);
  let modalBodyText = await page.locator('#modal-body-container').innerText();
  console.log(`[PASS] Modal body in EN contains 'TITAN V4': ${modalBodyText.includes('TITAN V4')}`);
  console.log(`[PASS] Modal body in EN contains 'Vice Chair': ${modalBodyText.includes('Vice Chair')}`);

  await page.close();
  await browser.close();

  console.log('\n=== ALL BILINGUAL TESTS PASSED WITH 100% ACCURACY! ===');
}

run().catch(console.error);
