const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const filePath = process.argv[2] || path.resolve(__dirname, 'README.md');
  const screenshotPath = process.argv[3] || path.resolve(__dirname, 'README_preview.png');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`file://${filePath}`, { waitUntil: 'load' });
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await browser.close();
  console.log('Screenshot saved to', screenshotPath);
})();