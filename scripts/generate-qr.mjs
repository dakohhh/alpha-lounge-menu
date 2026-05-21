import QRCode from "qrcode";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const MENU_URL = "https://alphaloungebar.vercel.app/";
const faviconPath = path.join(root, "public", "favicon.png");
const outPath = path.join(root, "public", "menu-qr.png");

const size = 1024;
const logoSize = Math.round(size * 0.22);
const pad = Math.round(logoSize * 0.18);

const qrBuffer = await QRCode.toBuffer(MENU_URL, {
  type: "png",
  width: size,
  margin: 2,
  errorCorrectionLevel: "H",
  color: {
    dark: "#0E0B08",
    light: "#F4ECDD",
  },
});

const logo = await sharp(faviconPath).resize(logoSize, logoSize).png().toBuffer();

const bgSize = logoSize + pad * 2;
const whiteBg = await sharp({
  create: {
    width: bgSize,
    height: bgSize,
    channels: 4,
    background: { r: 244, g: 236, b: 221, alpha: 1 },
  },
})
  .png()
  .toBuffer();

const logoBlock = await sharp(whiteBg)
  .composite([{ input: logo, top: pad, left: pad }])
  .png()
  .toBuffer();

const inset = Math.round((size - bgSize) / 2);

await sharp(qrBuffer)
  .composite([{ input: logoBlock, top: inset, left: inset }])
  .png()
  .toFile(outPath);

console.log(`QR code saved to ${outPath}`);
