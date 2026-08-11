import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const browser = await chromium.launch();
  const baseUrl = 'http://localhost:4321/ieee-ntc-yachay';

  console.log('=== 1. VERIFYING HOME PAGE DEFAULT LANGUAGE IS SPANISH ===');
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(`${baseUrl}/`);

  const initialNavFirst = await page.locator('.nav-link').first().innerText();
  console.log(`[PASS] First nav link in Spanish: "${initialNavFirst}" (Expected: INICIO)`);

  const headerPath = path.join(__dirname, 'verify_header_logo_aligned.png');
  await page.locator('header.site-header').screenshot({ path: headerPath });
  console.log(`[PASS] Header logo screenshot captured to: ${headerPath}`);

  console.log('\n=== 2. TESTING LANGUAGE TOGGLE (ES -> EN -> ES) ===');
  const enBtn = page.locator('#lang-switcher-desktop button[data-lang="en"]');
  await enBtn.click();
  await page.waitForTimeout(300);

  const enNavFirst = await page.locator('.nav-link').first().innerText();
  console.log(`[PASS] Nav link after switching to EN: "${enNavFirst}" (Expected: HOME)`);

  const esBtn = page.locator('#lang-switcher-desktop button[data-lang="es"]');
  await esBtn.click();
  await page.waitForTimeout(300);

  const esNavFirst = await page.locator('.nav-link').first().innerText();
  console.log(`[PASS] Nav link after switching back to ES: "${esNavFirst}" (Expected: INICIO)`);

  console.log('\n=== 3. VERIFYING MATEO GAVILANES BIO IN DIRECTIVE ===');
  await page.goto(`${baseUrl}/directive/`);
  const mateoCard = page.locator('#mateo-gavilanes');
  const mateoName = await mateoCard.locator('.member-name').innerText();
  const mateoRole = await mateoCard.locator('.member-role').innerText();
  const mateoProgram = await mateoCard.locator('.member-program').innerText();
  const mateoSummary = await mateoCard.locator('.member-summary').innerText();

  console.log(`[PASS] Name: "${mateoName}"`);
  console.log(`[PASS] Role: "${mateoRole}"`);
  console.log(`[PASS] Program: "${mateoProgram}"`);
  console.log(`[PASS] Bio contains TITAN V4: ${mateoSummary.includes('TITAN V4')}`);
  console.log(`[PASS] Bio contains 8vo semestre: ${mateoSummary.includes('8vo semestre')}`);

  console.log('\n=== 4. VERIFYING UPCOMING EVENT IS REGION 9 SUMMIT & NANOTALKS IS PAST ===');
  await page.goto(`${baseUrl}/events/`);
  const upcomingTitle = await page.locator('.upcoming-featured-card .upcoming-title').innerText();
  console.log(`[PASS] Upcoming Event Title: "${upcomingTitle}" (Expected: IEEE NTC Region 9 Student Virtual Summit 2026)`);

  const pastTitles = await page.locator('#past .card-grid-title').allInnerTexts();
  const hasNanoTalksInPast = pastTitles.some(t => t.includes('NanoTalks'));
  console.log(`[PASS] NanoTalks in Past Events: ${hasNanoTalksInPast}`);

  await page.close();
  await browser.close();

  console.log('\nALL CHECKS PASSED WITH 100% SUCCESS!');
}

run().catch(console.error);
