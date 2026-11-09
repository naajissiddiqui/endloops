const puppeteer = require('puppeteer-core');
const path = require('path');

async function captureHR() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  await page.evaluate(() => {
    document.getElementById('human-review').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  const hrEl = await page.$('#human-review');
  const hrPath = path.join('C:\\Users\\naajis\\.gemini\\antigravity\\brain\\b67b4eb4-7cc8-4c29-9a36-dc7778b91e92', 'section-humanreview-isolated.png');
  if (hrEl) {
    await hrEl.screenshot({ path: hrPath });
    console.log('Saved Human Review isolated screenshot');
  }
  await browser.close();
}

captureHR().catch(console.error);

