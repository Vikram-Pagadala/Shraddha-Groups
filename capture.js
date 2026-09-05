const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1080 } // Desktop view
  });

  try {
    // 1. Home
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/home_full.png', fullPage: true });
    console.log('Saved home_full.png');

    // 2. Projects
    await page.goto('http://localhost:3000/projects', { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/projects_full.png', fullPage: true });
    console.log('Saved projects_full.png');

    // 3. Contact
    await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/contact_full.png', fullPage: true });
    console.log('Saved contact_full.png');

  } catch(e) {
    console.error('Error capturing screenshots:', e);
  } finally {
    await browser.close();
  }
})();
