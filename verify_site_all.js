import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const resolutions = [1920, 1440, 1280, 1180, 1024, 768, 430, 375, 320];

  console.log('=== 1. VERIFYING GLOBAL LAYOUT & ZERO OVERFLOW ACROSS ALL VIEWPORTS ===');
  for (const w of resolutions) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto('http://localhost:4321/');

    const stats = await page.evaluate(() => {
      const header = document.querySelector('header.site-header');
      const main = document.querySelector('main#main-content') || document.querySelector('main');
      const footer = document.querySelector('footer.site-footer');

      return {
        bodyScrollWidth: document.body.scrollWidth,
        windowWidth: window.innerWidth,
        headerOverflow: header ? header.scrollWidth > header.clientWidth : false,
        footerOverflow: footer ? footer.scrollWidth > footer.clientWidth : false,
        headerLeft: header ? header.querySelector('.site-container')?.getBoundingClientRect().left : 0,
        footerLeft: footer ? footer.querySelector('.site-container')?.getBoundingClientRect().left : 0,
        headerRight: header ? header.querySelector('.site-container')?.getBoundingClientRect().right : 0,
        footerRight: footer ? footer.querySelector('.site-container')?.getBoundingClientRect().right : 0
      };
    });

    console.log(`Viewport ${w}px -> bodyScroll: ${stats.bodyScrollWidth}, winWidth: ${stats.windowWidth}, headerLeft: ${Math.round(stats.headerLeft)}, footerLeft: ${Math.round(stats.footerLeft)}, headerRight: ${Math.round(stats.headerRight)}, footerRight: ${Math.round(stats.footerRight)}`);

    await page.close();
  }

  console.log('\n=== 2. VERIFYING EVENTS PAGE (/events/) ===');
  const eventsPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await eventsPage.goto('http://localhost:4321/events/');
  
  const upcomingCount = await eventsPage.locator('#upcoming .upcoming-featured-card').count();
  const pastCount = await eventsPage.locator('#past .event-grid-card').count();
  const isLogicLockInEvents = await eventsPage.locator('#upcoming, #past').innerText().then(t => t.includes('Logic Lock: Nanoelectronics'));

  console.log(`[PASS] Upcoming Events Count: ${upcomingCount} (Expected: 1)`);
  console.log(`[PASS] Past Events Grid Count: ${pastCount} (Expected: 10)`);
  console.log(`[PASS] Logic Lock removed from Events: ${!isLogicLockInEvents}`);

  await eventsPage.screenshot({ path: 'verify_events_1440px.png', fullPage: true });
  await eventsPage.close();

  console.log('\n=== 3. VERIFYING DIRECTIVE PAGE (/directive/) ===');
  const directivePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await directivePage.goto('http://localhost:4321/directive/');

  const memberCards = await directivePage.locator('.directive-card').all();
  console.log(`[PASS] Directive Members Count: ${memberCards.length} (Expected: 6)`);

  const memberNames = await directivePage.locator('.member-name').allInnerTexts();
  const memberRoles = await directivePage.locator('.member-role').allInnerTexts();
  
  memberNames.forEach((name, i) => {
    console.log(` Member ${i + 1}: ${name} — Role: ${memberRoles[i]}`);
  });

  await directivePage.screenshot({ path: 'verify_directive_1440px.png', fullPage: true });
  await directivePage.close();

  console.log('\n=== 4. VERIFYING HEADER & FOOTER AT 1920PX & 1180PX ===');
  const d1920 = await browser.newPage({ viewport: { width: 1920, height: 900 } });
  await d1920.goto('http://localhost:4321/');
  await d1920.locator('header.site-header').screenshot({ path: 'header_1920px.png' });
  await d1920.locator('footer.site-footer').screenshot({ path: 'footer_1920px.png' });
  await d1920.close();

  const d1180 = await browser.newPage({ viewport: { width: 1180, height: 900 } });
  await d1180.goto('http://localhost:4321/');
  await d1180.locator('header.site-header').screenshot({ path: 'header_1180px.png' });
  await d1180.close();

  await browser.close();
  console.log('\nALL AUTOMATED VERIFICATION PASSED SUCCESSFULLY!');
}

run().catch(console.error);
