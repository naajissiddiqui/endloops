const puppeteer = require('puppeteer-core');
const path = require('path');

async function testModalSubmit() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Open modal via top navbar Request a Demo
  await page.evaluate(() => {
    const btn = document.querySelector('header button');
    if (btn) btn.click();
  });

  // Wait for modal dialog to appear
  await page.waitForSelector('div[role="dialog"]', { visible: true });
  await new Promise(r => setTimeout(r, 400));

  // Fill in inputs inside the dialog
  await page.evaluate(() => {
    const dialog = document.querySelector('div[role="dialog"]');
    const inputs = dialog.querySelectorAll('input');
    // Name
    inputs[0].value = 'NAAJIS SIDDIQUI';
    inputs[0].dispatchEvent(new Event('input', { bubbles: true }));
    // Email
    inputs[1].value = 'naajis@example.com';
    inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
    // Submit
    const submit = dialog.querySelector('button[type="submit"]');
    if (submit) submit.click();
  });

  // Wait for submission animation and success view
  await new Promise(r => setTimeout(r, 1200));

  const artifactPath = path.join('C:\\Users\\naajis\\.gemini\\antigravity\\brain\\b67b4eb4-7cc8-4c29-9a36-dc7778b91e92', 'modal-success-clean.png');
  await page.screenshot({ path: artifactPath });
  console.log('Saved modal success screenshot to', artifactPath);

  await browser.close();
}

testModalSubmit().catch(console.error);
