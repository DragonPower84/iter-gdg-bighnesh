import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const outputDir = path.resolve('./screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();
  const consoleMessages = [];

  page.on('console', (msg) => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
  });

  page.on('pageerror', (err) => {
    consoleMessages.push({ type: 'pageerror', text: err.toString() });
  });

  // 1. Desktop Viewport
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outputDir, 'desktop_view.png'), fullPage: false });

  // Hover over the primary CTA button to capture the SmookyDev hover effect
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find((b) => b.textContent && b.textContent.includes('SECURE YOUR SPOT'));
    if (btn) btn.id = 'hero-secure-btn';
  });
  await page.hover('#hero-secure-btn');
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(outputDir, 'button_hover.png'), fullPage: false });
  await page.evaluate(() => {
    const f = document.querySelector('footer');
    if (f) f.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'desktop_footer.png'), fullPage: false });

  // 2. Tablet Viewport
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'tablet_view.png'), fullPage: false });

  // 3. Mobile Viewport & Drawer
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outputDir, 'mobile_view.png'), fullPage: false });

  const menuBtn = await page.$('button[aria-label="Open navigation menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise((r) => setTimeout(r, 400));
    await page.screenshot({ path: path.join(outputDir, 'mobile_drawer.png'), fullPage: false });
  }

  console.log('Capture completed successfully.');
  console.log('Console logs:', JSON.stringify(consoleMessages));
  await browser.close();
}

run().catch((err) => {
  console.error('Screenshot error:', err);
  process.exit(1);
});
