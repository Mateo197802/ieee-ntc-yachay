import { chromium } from 'playwright';

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 320, height: 900 } });
  await page.goto('http://localhost:4321/');

  const overflowers = await page.evaluate(() => {
    const list = [];
    document.querySelectorAll('*').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.right > 320 || el.offsetWidth > 320) {
        list.push({
          tag: el.tagName,
          class: el.className,
          id: el.id,
          offsetWidth: el.offsetWidth,
          rectRight: rect.right
        });
      }
    });
    return list;
  });

  console.log('Overflowing elements at 320px:');
  console.log(overflowers.slice(0, 20));

  await browser.close();
}

run().catch(console.error);
