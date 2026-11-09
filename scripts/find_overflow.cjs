const puppeteer = require('puppeteer-core');

async function findOverflow() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Open mobile menu
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Open menu"]');
    if (btn) btn.click();
  });
  await new Promise(resolve => setTimeout(resolve, 500));

  const overflows = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('*'));
    return elements
      .map(el => {
        const rect = el.getBoundingClientRect();
        return {
          tag: el.tagName,
          id: el.id,
          className: el.className,
          right: rect.right,
          width: rect.width,
          scrollWidth: el.scrollWidth
        };
      })
      .filter(el => el.right > 390.5 || el.scrollWidth > 390.5)
      .slice(0, 10);
  });

  console.log('Overflow elements:', JSON.stringify(overflows, null, 2));
  await browser.close();
}

findOverflow().catch(console.error);

