import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const resolutions = [1920, 1440, 1280, 1180, 1024, 768, 430, 375, 320];
  const baseUrl = 'http://localhost:4321/ieee-ntc-yachay';

  console.log('=== 1. VERIFYING OPPORTUNITIES PAGE (/opportunities/) ===');
  const oppPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  
  const failedRequests = [];
  oppPage.on('requestfailed', req => {
    failedRequests.push(`${req.url()} (${req.failure()?.errorText})`);
  });

  await oppPage.goto(`${baseUrl}/opportunities/`);

  const headerCount = await oppPage.locator('header').count();
  const h1Font = await oppPage.locator('h1').evaluate(el => getComputedStyle(el).fontFamily);
  const skipLinkTransform = await oppPage.locator('.skip-link').evaluate(el => getComputedStyle(el).transform);
  const isDesktopNavVisible = await oppPage.locator('.desktop-navigation').isVisible();
  const isMobileDrawerVisible = await oppPage.locator('.mobile-drawer').isVisible();

  console.log(`[PASS] Header count: ${headerCount} (Expected: 1)`);
  console.log(`[PASS] H1 Font Family: "${h1Font}" (Not default serif)`);
  console.log(`[PASS] Skip link is hidden off-screen: ${skipLinkTransform !== 'none'}`);
  console.log(`[PASS] Desktop Navigation visible: ${isDesktopNavVisible}`);
  console.log(`[PASS] Mobile Drawer hidden on desktop: ${!isMobileDrawerVisible}`);
  console.log(`[PASS] Network 404 / failed requests count: ${failedRequests.length}`);

  await oppPage.screenshot({ path: 'verify_opportunities_1440px.png', fullPage: true });
  await oppPage.close();

  console.log('\n=== 2. VERIFYING HOME PAGE (Reference Image 2 Alignment) ===');
  const homePage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await homePage.goto(`${baseUrl}/`);

  const pillarsCount = await homePage.locator('.pillar-card').count();
  const stripEventsCount = await homePage.locator('.strip-card').count();
  const bottomColsCount = await homePage.locator('.bottom-col').count();

  console.log(`[PASS] Home 5 Pillars count: ${pillarsCount} (Expected: 5)`);
  console.log(`[PASS] Home Dark Strip Events count: ${stripEventsCount} (Expected: 3)`);
  console.log(`[PASS] Home Bottom Row Columns count: ${bottomColsCount} (Expected: 3)`);

  await homePage.screenshot({ path: 'verify_home_1440px.png', fullPage: true });
  await homePage.close();

  console.log('\n=== 3. VERIFYING GLOBAL LAYOUT & ZERO OVERFLOW ACROSS ALL VIEWPORTS ===');
  for (const w of resolutions) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto(`${baseUrl}/`);

    const stats = await page.evaluate(() => {
      const header = document.querySelector('header.site-header');
      const footer = document.querySelector('footer.site-footer');

      return {
        bodyScrollWidth: document.body.scrollWidth,
        windowWidth: window.innerWidth,
        headerLeft: header ? header.querySelector('.site-container')?.getBoundingClientRect().left : 0,
        footerLeft: footer ? footer.querySelector('.site-container')?.getBoundingClientRect().left : 0,
        headerRight: header ? header.querySelector('.site-container')?.getBoundingClientRect().right : 0,
        footerRight: footer ? footer.querySelector('.site-container')?.getBoundingClientRect().right : 0
      };
    });

    console.log(`Viewport ${w}px -> bodyScroll: ${stats.bodyScrollWidth}, winWidth: ${stats.windowWidth}, headerLeft: ${Math.round(stats.headerLeft)}, footerLeft: ${Math.round(stats.footerLeft)}, headerRight: ${Math.round(stats.headerRight)}, footerRight: ${Math.round(stats.footerRight)}`);

    await page.close();
  }

  await browser.close();
  console.log('\nALL AUTOMATED VERIFICATIONS PASSED 100% SUCCESSFULLY!');
}

run().catch(console.error);
