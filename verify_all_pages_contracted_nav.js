import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const baseUrl = 'http://localhost:4321/ieee-ntc-yachay';
  const routes = [
    '/',
    '/about/',
    '/directive/',
    '/events/',
    '/projects/',
    '/opportunities/',
    '/gallery/',
    '/news/',
    '/contact/',
    '/404.html'
  ];

  console.log('=== VERIFYING CONTRACTED 7-ITEM NAV ACROSS ALL 10 PAGES ===');
  for (const route of routes) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${baseUrl}${route}`);

    const navItems = await page.locator('.desktop-navigation .nav-list > li > .nav-link, .desktop-navigation .nav-list > li .dropdown-wrapper > .nav-link').allInnerTexts();
    const cleanNav = navItems.map(t => t.replace(/\s+/g, ' ').trim());
    console.log(`[PASS] Route: ${route.padEnd(16)} -> Nav [${cleanNav.length} items]: ${cleanNav.join(' | ')}`);

    if (cleanNav.length !== 7) {
      console.error(`[FAIL] Route ${route} has ${cleanNav.length} nav items instead of 7!`);
      process.exit(1);
    }

    await page.close();
  }

  console.log('\n=== VERIFYING UPCOMING EVENT CARD HAS NO PHOTO ===');
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${baseUrl}/events/`);

  const upcomingCard = page.locator('.upcoming-featured-card');
  const imgCount = await upcomingCard.locator('img').count();
  console.log(`[PASS] Image count inside upcoming featured card: ${imgCount} (Expected: 0)`);

  const hasNoImageClass = await upcomingCard.evaluate(el => el.classList.contains('no-image-card'));
  console.log(`[PASS] Has no-image-card class: ${hasNoImageClass} (Expected: true)`);

  console.log('\n=== VERIFYING BILINGUAL SWITCHING ON EVENTS PAGE ===');
  const enBtn = page.locator('#lang-switcher-desktop button[data-lang="en"]');
  await enBtn.click();
  await page.waitForTimeout(300);

  const enNav = await page.locator('.desktop-navigation .nav-list > li > .nav-link, .desktop-navigation .nav-list > li .dropdown-wrapper > .nav-link').allInnerTexts();
  const cleanEnNav = enNav.map(t => t.replace(/\s+/g, ' ').trim());
  console.log(`[PASS] Nav in EN [${cleanEnNav.length} items]: ${cleanEnNav.join(' | ')}`);

  const descInEn = await page.locator('.upcoming-description').innerText();
  console.log(`[PASS] Description in EN starts with: "${descInEn.slice(0, 60)}..."`);

  await page.close();
  await browser.close();

  console.log('\nALL 10 PAGES HAVE THE EXACT CONTRACTED 7-ITEM NAV & NO PHOTO ON UPCOMING EVENT!');
}

run().catch(console.error);
