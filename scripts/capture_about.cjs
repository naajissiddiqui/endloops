const puppeteer = require('puppeteer-core');
const path = require('path');

async function captureAbout() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  await page.evaluate(() => {
    document.getElementById('about').scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));

  const el = await page.$('#about');
  const outPath = path.join('C:\\Users\\naajis\\.gemini\\antigravity\\brain\\b67b4eb4-7cc8-4c29-9a36-dc7778b91e92', 'section-about-clean.png');
  if (el) {
    await el.screenshot({ path: outPath });
    console.log('Saved About isolated screenshot to', outPath);
  }
  await browser.close();
}

captureAbout().catch(console.error);

