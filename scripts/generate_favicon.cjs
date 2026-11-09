const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const logoPath = path.join(__dirname, '../public/images/endloops-logo.png');
  const logoBuf = fs.readFileSync(logoPath);
  const dataUri = `data:image/png;base64,${logoBuf.toString('base64')}`;

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 600, height: 400 });

  const cropInfo = await page.evaluate(async (uri) => {
    const img = new Image();
    img.src = uri;
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
    });

    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, img.width, img.height);
    const { data, width, height } = imgData;

    // Scan column density
    const colDensity = [];
    for (let x = 0; x < width; x++) {
      let count = 0;
      for (let y = 0; y < height; y++) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 30) count++;
      }
      colDensity.push(count);
    }

    // Find first non-zero column
    let minX = width, maxX = 0, minY = height, maxY = 0;
    let firstX = -1, gapX = -1;
    for (let x = 0; x < width; x++) {
      if (colDensity[x] > 0 && firstX === -1) firstX = x;
      // The symbol ends before column 200, find the gap before the text 'E' starts
      if (firstX !== -1 && colDensity[x] === 0 && x > 50 && gapX === -1) {
        gapX = x;
      }
    }

    // If gap is found, symbol is from firstX to gapX
    const symbolRight = gapX !== -1 ? gapX : 160;

    for (let x = firstX; x < symbolRight; x++) {
      for (let y = 0; y < height; y++) {
        const alpha = data[(y * width + x) * 4 + 3];
        if (alpha > 30) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    return { minX, maxX, minY, maxY, width: maxX - minX + 1, height: maxY - minY + 1, fullW: width, fullH: height, colDensity: colDensity.slice(0, 200) };
  }, dataUri);

  console.log('Detected icon crop bounds:', cropInfo);

  // Now create square favicons with high quality at 32x32, 64x64, 180x180 (apple-touch-icon), and 512x512
  const generateSquare = async (size) => {
    return await page.evaluate(async ({ uri, crop, size }) => {
      const img = new Image();
      img.src = uri;
      await new Promise(res => { img.onload = res; });

      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Draw symbol centered with slight padding (10%)
      const padding = size * 0.1;
      const avail = size - padding * 2;
      const scale = Math.min(avail / crop.width, avail / crop.height);
      const drawW = crop.width * scale;
      const drawH = crop.height * scale;
      const drawX = (size - drawW) / 2;
      const drawY = (size - drawH) / 2;

      ctx.drawImage(
        img,
        crop.minX, crop.minY, crop.width, crop.height,
        drawX, drawY, drawW, drawH
      );

      return canvas.toDataURL('image/png');
    }, { uri: dataUri, crop: cropInfo, size });
  };

  const favicon64 = await generateSquare(64);
  const favicon32 = await generateSquare(32);
  const favicon180 = await generateSquare(180);

  const saveBase64Png = (dataUrl, filePath) => {
    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
    console.log('Saved:', filePath);
  };

  saveBase64Png(favicon64, path.join(__dirname, '../public/favicon.png'));
  saveBase64Png(favicon32, path.join(__dirname, '../public/favicon-32x32.png'));
  saveBase64Png(favicon180, path.join(__dirname, '../public/apple-touch-icon.png'));
  saveBase64Png(favicon64, 'C:\\Users\\naajis\\.gemini\\antigravity\\brain\\b67b4eb4-7cc8-4c29-9a36-dc7778b91e92\\favicon-infinity.png');

  await browser.close();
}

generateFavicon().catch(console.error);
