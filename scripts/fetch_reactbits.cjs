const https = require('https');
const fs = require('fs');
const path = require('path');

const components = [
  'PillNav',
  'BlurText',
  'SplitText',
  'ScrollReveal',
  'ScrollFloat',
  'AnimatedContent',
  'FadeContent',
  'SpotlightCard',
  'ScrollStack',
  'AnimatedList',
  'Stepper',
  'TiltedCard',
  'Threads',
  'Aurora',
  'LightRays',
  'Waves'
];

function fetchRegistry(name) {
  const url = `https://reactbits.dev/r/${name}-TS-TW.json`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        // Try without TS-TW or with JS
        https.get(`https://reactbits.dev/r/${name}.json`, (res2) => {
          if (res2.statusCode !== 200) {
            console.log(`[NOT FOUND] ${name} (${res.statusCode}, ${res2.statusCode})`);
            return resolve(null);
          }
          let data = '';
          res2.on('data', chunk => data += chunk);
          res2.on('end', () => {
            try {
              resolve(JSON.parse(data));
            } catch (e) {
              resolve(null);
            }
          });
        }).on('error', () => resolve(null));
        return;
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const outDir = path.resolve('./src/components/reactbits');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const name of components) {
    console.log(`Checking ${name}...`);
    const data = await fetchRegistry(name);
    if (data && data.files && data.files.length > 0) {
      console.log(`Found ${name}! Files: ${data.files.map(f => f.path).join(', ')}`);
      for (const file of data.files) {
        const basename = path.basename(file.path);
        const targetPath = path.join(outDir, basename);
        fs.writeFileSync(targetPath, file.content, 'utf8');
        console.log(`Saved: ${targetPath}`);
      }
    }
  }
}

run();

