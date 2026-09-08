// Static exports from the existing brand artwork; no image generation at runtime.
// Regenerate with `pnpm seo:assets` after changing public/idealisa-logo.png
// or the OG image copy/layout below.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import sharp from "sharp";
const artwork = await readFile(
  new URL("../public/idealisa-logo.png", import.meta.url),
);
const out = new URL("../public/seo/", import.meta.url);
await mkdir(out, { recursive: true });
async function square(size, path) {
  const inset = Math.round(size * 0.13);
  const mark = await sharp(artwork)
    .resize(size - inset * 2, size - inset * 2, {
      fit: "contain",
      background: "#ffffff",
    })
    .png()
    .toBuffer();
  return sharp({
    create: { width: size, height: size, channels: 4, background: "#ffffff" },
  })
    .composite([{ input: mark, left: inset, top: inset }])
    .png()
    .toFile(new URL(path, out).pathname);
}
await square(48, "icon-48.png");
await square(180, "apple-icon-180.png");
await square(512, "idealisa-logo-512.png");
const frames = await Promise.all(
  [16, 32, 48].map((size) =>
    sharp(new URL("idealisa-logo-512.png", out).pathname)
      .resize(size, size)
      .png()
      .toBuffer(),
  ),
);
const header = Buffer.alloc(6 + 16 * frames.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(frames.length, 4);
let offset = header.length;
frames.forEach((frame, i) => {
  const entry = 6 + i * 16;
  header[entry] = [16, 32, 48][i];
  header[entry + 1] = header[entry];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(frame.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += frame.length;
});
await writeFile(
  new URL("../public/favicon.ico", import.meta.url),
  Buffer.concat([header, ...frames]),
);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#4A3127"/>
<rect x="0" y="606" width="1200" height="24" fill="#2E7D32"/>
<circle cx="1080" cy="55" r="290" fill="#634331"/>
<text x="76" y="135" fill="#fff" font-family="Arial, sans-serif" font-size="58" font-weight="700">Idealisa</text>
<rect x="76" y="177" width="64" height="5" fill="#edaa23"/>
<text x="76" y="275" fill="#fff" font-family="Arial, sans-serif" font-size="47" font-weight="700">Estratégia de marca.</text>
<text x="76" y="338" fill="#fff" font-family="Arial, sans-serif" font-size="47" font-weight="700">Marketing digital.</text>
<text x="76" y="410" fill="#f0d9a8" font-family="Arial, sans-serif" font-size="28">Luanda, Angola</text>
<text x="76" y="553" fill="#fff" font-family="Arial, sans-serif" font-size="24">idealisa.ao</text>
</svg>`;
const mark = await sharp(artwork)
  .resize(235, 320, { fit: "inside" })
  .png()
  .toBuffer();
await sharp(Buffer.from(svg))
  .composite([{ input: mark, left: 865, top: 192 }])
  .png()
  .toFile(new URL("idealisa-og.png", out).pathname);
console.log(
  "Exported branded 1200×630 OG image, 48/180/512px icons and favicon.ico",
);
