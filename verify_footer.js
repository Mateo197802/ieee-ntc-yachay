import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const resolutions = [1920, 1440, 1280, 1024, 768, 430, 375, 320];

  for (const w of resolutions) {
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto('http://localhost:4321/');

    const scrollW = await page.evaluate(() => document.body.scrollWidth);
    const clientW = await page.evaluate(() => window.innerWidth);
    const footerOverflow = await page.evaluate(() => {
      const footer = document.querySelector('footer.site-footer');
      return footer ? footer.scrollWidth > footer.clientWidth : false;
    });
    const hasOverflow = scrollW > clientW || footerOverflow;

    const footer = page.locator('footer.site-footer');
    await footer.scrollIntoViewIfNeeded();

    const screenshotPath = `footer_${w}px.png`;
    await footer.screenshot({ path: screenshotPath });

    const emailText = await page.locator('.email-link').innerText();

    console.log(`[PASS] ${w}px -> scrollWidth: ${scrollW}, clientWidth: ${clientW}, overflow: ${hasOverflow}, email: "${emailText}"`);
    await page.close();
  }

  await browser.close();
}

run().catch(console.error);
