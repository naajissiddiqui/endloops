const puppeteer = require('puppeteer-core');
const path = require('path');

async function capture() {
  const artifactDir = 'C:\\Users\\naajis\\.gemini\\antigravity\\brain\\b67b4eb4-7cc8-4c29-9a36-dc7778b91e92';
  
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Desktop 1440x900
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 300));

  // Desktop hero
  const desktopHeroPath = path.join(artifactDir, 'desktop-hero-minimal.png');
  await page.screenshot({ path: desktopHeroPath, fullPage: false });
  console.log('Saved desktop hero screenshot to', desktopHeroPath);

  // Trigger reveals smoothly
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto';
    const distance = 400;
    while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
      document.scrollingElement.scrollBy(0, distance);
      await new Promise(resolve => setTimeout(resolve, 40));
    }
    window.scrollTo(0, 0);
  });
  await new Promise(resolve => setTimeout(resolve, 300));

  const desktopFullPath = path.join(artifactDir, 'desktop-full-minimal.png');
  await page.screenshot({ path: desktopFullPath, fullPage: true });
  console.log('Saved desktop full screenshot to', desktopFullPath);

  // 2. Mobile 390x844 (iPhone 12/13/14)
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 300));

  // Mobile hero
  const mobileHeroPath = path.join(artifactDir, 'mobile-hero-minimal.png');
  await page.screenshot({ path: mobileHeroPath, fullPage: false });
  console.log('Saved mobile hero screenshot to', mobileHeroPath);

  // Trigger reveals smoothly
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto';
    const distance = 400;
    while (document.scrollingElement.scrollTop + window.innerHeight < document.scrollingElement.scrollHeight) {
      document.scrollingElement.scrollBy(0, distance);
      await new Promise(resolve => setTimeout(resolve, 40));
    }
    window.scrollTo(0, 0);
  });
  await new Promise(resolve => setTimeout(resolve, 300));

  const mobileFullPath = path.join(artifactDir, 'mobile-full-minimal.png');
  await page.screenshot({ path: mobileFullPath, fullPage: true });
  console.log('Saved mobile full screenshot to', mobileFullPath);

  // Test mobile menu open
  await page.evaluate(() => {
    const btn = document.querySelector('button[aria-label="Toggle navigation menu"]');
    if (btn) btn.click();
  });
  await new Promise(resolve => setTimeout(resolve, 400));
  const mobileMenuPath = path.join(artifactDir, 'mobile-menu-drawer.png');
  await page.screenshot({ path: mobileMenuPath, fullPage: false });
  console.log('Saved mobile menu screenshot to', mobileMenuPath);

  // Check for horizontal overflow on mobile
  const overflow = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });
  console.log('Mobile overflow check:', JSON.stringify(overflow));

  await browser.close();
}

capture().catch(console.error);
