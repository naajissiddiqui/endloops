const puppeteer = require('puppeteer-core');
const path = require('path');

async function testParallaxAndCapture() {
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
  
  await new Promise(resolve => setTimeout(resolve, 800));

  // Check initial transform
  const getTransform = async () => {
    return await page.evaluate(() => {
      const el = document.querySelector('section div[class*="will-change-transform"]');
      return el ? el.style.transform : 'none';
    });
  };

  console.log('Initial transform:', await getTransform());

  // Capture center resting state
  const desktopHeroPath = path.join(artifactDir, 'desktop-hero-ribbons.png');
  await page.screenshot({ path: desktopHeroPath, fullPage: false });
  console.log('Saved desktop resting screenshot to', desktopHeroPath);

  // Move cursor to far left (x=100, y=400)
  await page.mouse.move(100, 400, { steps: 10 });
  await new Promise(resolve => setTimeout(resolve, 400));
  const transformLeft = await getTransform();
  console.log('Transform when cursor is at left (should be positive X shift):', transformLeft);

  const desktopLeftPath = path.join(artifactDir, 'desktop-hero-cursor-left.png');
  await page.screenshot({ path: desktopLeftPath, fullPage: false });

  // Move cursor to far right (x=1340, y=400)
  await page.mouse.move(1340, 400, { steps: 10 });
  await new Promise(resolve => setTimeout(resolve, 400));
  const transformRight = await getTransform();
  console.log('Transform when cursor is at right (should be negative X shift):', transformRight);

  const desktopRightPath = path.join(artifactDir, 'desktop-hero-cursor-right.png');
  await page.screenshot({ path: desktopRightPath, fullPage: false });

  // 2. Mobile 390x844
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(resolve => setTimeout(resolve, 800));

  const mobileHeroPath = path.join(artifactDir, 'mobile-hero-ribbons.png');
  await page.screenshot({ path: mobileHeroPath, fullPage: false });
  console.log('Saved mobile hero screenshot to', mobileHeroPath);

  // Check mobile overflow
  const overflow = await page.evaluate(() => {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });
  console.log('Mobile overflow check:', overflow);

  await browser.close();
}

testParallaxAndCapture().catch(console.error);

