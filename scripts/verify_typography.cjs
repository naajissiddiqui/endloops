const puppeteer = require('puppeteer-core');
const path = require('path');

async function testTypography() {
  const artifactDir = 'C:\\Users\\naajis\\.gemini\\antigravity\\brain\\b67b4eb4-7cc8-4c29-9a36-dc7778b91e92';
  
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test 1: Desktop (1440px)
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));

  const desktopAudit = await page.evaluate(() => {
    const getStyle = (el) => {
      const s = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        text: el.innerText.slice(0, 40).replace(/\n/g, ' '),
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing
      };
    };

    const hero = document.querySelector('h1');
    const h2s = Array.from(document.querySelectorAll('h2')).map(getStyle);
    const h3s = Array.from(document.querySelectorAll('h3')).map(getStyle);
    const h4s = Array.from(document.querySelectorAll('h4')).map(getStyle);
    const bodyLg = document.querySelector('.text-body-lg');
    const bodySm = document.querySelector('.text-body-sm');
    const label = document.querySelector('.text-label');
    const btn = document.querySelector('button.text-btn, a.text-btn');

    return {
      hero: hero ? getStyle(hero) : null,
      h2Count: h2s.length,
      sampleH2: h2s[0],
      sampleH3: h3s[0],
      sampleH4: h4s[0],
      bodyLg: bodyLg ? getStyle(bodyLg) : null,
      bodySm: bodySm ? getStyle(bodySm) : null,
      label: label ? getStyle(label) : null,
      btn: btn ? getStyle(btn) : null
    };
  });

  console.log('--- DESKTOP TYPOGRAPHY AUDIT (1440px) ---');
  console.log(JSON.stringify(desktopAudit, null, 2));

  // Screenshot desktop hero
  await page.screenshot({ path: path.join(artifactDir, 'desktop-hero-typography.png') });

  // Test 2: Mobile (390px)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 400));

  const mobileAudit = await page.evaluate(() => {
    const getStyle = (el) => {
      const s = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        text: el.innerText.slice(0, 40).replace(/\n/g, ' '),
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing
      };
    };

    const hero = document.querySelector('h1');
    const h2s = Array.from(document.querySelectorAll('h2')).map(getStyle);
    const h3s = Array.from(document.querySelectorAll('h3')).map(getStyle);
    const h4s = Array.from(document.querySelectorAll('h4')).map(getStyle);
    const bodyLg = document.querySelector('.text-body-lg');
    const bodySm = document.querySelector('.text-body-sm');
    const label = document.querySelector('.text-label');
    const btn = document.querySelector('button.text-btn, a.text-btn');

    return {
      hero: hero ? getStyle(hero) : null,
      sampleH2: h2s[0],
      sampleH3: h3s[0],
      sampleH4: h4s[0],
      bodyLg: bodyLg ? getStyle(bodyLg) : null,
      bodySm: bodySm ? getStyle(bodySm) : null,
      label: label ? getStyle(label) : null,
      btn: btn ? getStyle(btn) : null
    };
  });

  console.log('--- MOBILE TYPOGRAPHY AUDIT (390px) ---');
  console.log(JSON.stringify(mobileAudit, null, 2));

  // Screenshot mobile hero
  await page.screenshot({ path: path.join(artifactDir, 'mobile-hero-typography.png') });

  await browser.close();
}

testTypography().catch(console.error);
