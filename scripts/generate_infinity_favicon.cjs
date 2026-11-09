const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function generateInfinityFavicon() {
  const logoPath = path.join(__dirname, '../public/images/endloops-logo.png');
  const logoBuf = fs.readFileSync(logoPath);
  const dataUri = 'data:image/png;base64,' + logoBuf.toString('base64');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();

  const generateFaviconBuffer = async (size) => {
    return await page.evaluate(async ({ uri, size }) => {
      const img = new Image();
      img.src = uri;
      await new Promise(r => { img.onload = r; });

      // 1. Draw source crop to an intermediate canvas and convert white background to transparent
      const cropX = 23;
      const cropY = 30;
      const cropW = 113; // maxX 135 - minX 23 + 1
      const cropH = 67;  // maxY 96 - minY 30 + 1

      const srcCanvas = document.createElement('canvas');
      srcCanvas.width = cropW;
      srcCanvas.height = cropH;
      const srcCtx = srcCanvas.getContext('2d');
      srcCtx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

      const srcData = srcCtx.getImageData(0, 0, cropW, cropH);
      for (let i = 0; i < srcData.data.length; i += 4) {
        const r = srcData.data[i];
        const g = srcData.data[i+1];
        const b = srcData.data[i+2];

        // If white or off-white background, make transparent
        const brightness = (r + g + b) / 3;
        if (brightness > 248) {
          srcData.data[i+3] = 0;
        } else if (brightness > 235) {
          // Soft anti-alias edge
          srcData.data[i+3] = Math.round(((248 - brightness) / 13) * 255);
        }
      }
      srcCtx.putImageData(srcData, 0, 0);

      // 2. Center inside square output canvas with slight padding
      const outCanvas = document.createElement('canvas');
      outCanvas.width = size;
      outCanvas.height = size;
      const outCtx = outCanvas.getContext('2d');
      outCtx.imageSmoothingEnabled = true;
      outCtx.imageSmoothingQuality = 'high';

      const pad = Math.round(size * 0.08);
      const availW = size - pad * 2;
      const availH = size - pad * 2;
      const scale = Math.min(availW / cropW, availH / cropH);
      const targetW = Math.round(cropW * scale);
      const targetH = Math.round(cropH * scale);
      const targetX = Math.round((size - targetW) / 2);
      const targetY = Math.round((size - targetH) / 2);

      outCtx.drawImage(srcCanvas, 0, 0, cropW, cropH, targetX, targetY, targetW, targetH);

      return outCanvas.toDataURL('image/png');
    }, { uri: dataUri, size });
  };

  const sizes = [16, 32, 64, 180, 512];
  for (const s of sizes) {
    const dataUrl = await generateFaviconBuffer(s);
    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    const filename = s === 32 ? 'favicon.png' : s === 180 ? 'apple-touch-icon.png' : `favicon-${s}x${s}.png`;
    fs.writeFileSync(path.join(__dirname, '../public', filename), Buffer.from(base64Data, 'base64'));
    console.log(`Saved public/${filename} (${s}x${s})`);
  }

  // Also save preview to artifacts
  const preview = await generateFaviconBuffer(128);
  fs.writeFileSync(
    'C:\\Users\\naajis\\.gemini\\antigravity\\brain\\b67b4eb4-7cc8-4c29-9a36-dc7778b91e92\\favicon-infinity.png',
    Buffer.from(preview.replace(/^data:image\/png;base64,/, ''), 'base64')
  );

  await browser.close();
}

generateInfinityFavicon().catch(console.error);
