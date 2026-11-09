const puppeteer = require('puppeteer-core');

async function inspect() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const sections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('main > section, footer')).map((el, idx) => ({
      index: idx,
      id: el.id,
      className: el.className,
      preview: el.innerText.replace(/\n+/g, ' ').slice(0, 80)
    }));
  });

  console.log(JSON.stringify(sections, null, 2));
  await browser.close();
}

inspect().catch(console.error);

