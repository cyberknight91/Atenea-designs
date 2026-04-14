import sharp from 'sharp';

const input = 'assets/Gemini_Generated_Image_47b6bh47b6bh47b6.png';
const output = 'public/logo.png';

const LO = 225;
const HI = 250;

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
let cleared = 0;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const minV = Math.min(r, g, b);
  if (minV >= HI) {
    data[i + 3] = 0;
    cleared++;
  } else if (minV >= LO) {
    const t = (minV - LO) / (HI - LO);
    data[i + 3] = Math.round(data[i + 3] * (1 - t));
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`OK · ${width}×${height} · cleared ${cleared} px → ${output}`);
