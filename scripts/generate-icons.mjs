// Builds the site icons and the social share image from the brand kit in
// brand/ using macOS `sips`. Run: node scripts/generate-icons.mjs
//
// Source art (from the logo kit): the B mark and the beshel.dev lockup, both
// on #111314. The mark sits in the middle of a 1200px square, spanning about
// x 347-888 and y 257-942, so each size crops to the mark plus padding first.
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");
const mark = join(root, "brand", "beshel-mark-on-black.png");
const lockup = join(root, "brand", "beshel-lockup-on-black.png");
const tmp = mkdtempSync(join(tmpdir(), "beshel-icons-"));

const sips = (...args) => execFileSync("sips", args, { stdio: "ignore" });

// Crop a centred square (side px) around the mark's centre (617, 600).
function squareCrop(side, name) {
    const out = join(tmp, name);
    sips(
        "-c", String(side), String(side),
        "--cropOffset", String(Math.round(600 - side / 2)), String(Math.round(617 - side / 2)),
        mark, "--out", out,
    );
    return out;
}

function resize(src, size, dest) {
    sips("-z", String(size), String(size), src, "--out", join(pub, dest));
    console.log("wrote public/" + dest);
}

const tight = squareCrop(780, "tight.png"); // favicons: mark fills the tile
const roomy = squareCrop(920, "roomy.png"); // app icons: keep a safe margin

resize(tight, 32, "favicon-32.png");
resize(roomy, 180, "apple-touch-icon.png");
resize(roomy, 192, "icon-192.png");
resize(roomy, 512, "icon-512.png");

// Open Graph / Twitter card: 1200x630. The lockup is 1600x1100, so pad the
// sides out to 2096x1100 (the same 1.905 ratio) rather than cropping the mark.
const ogPad = join(tmp, "og-pad.png");
sips("-p", "1100", "2096", "--padColor", "111314", lockup, "--out", ogPad);
sips("-z", "630", "1200", "-s", "format", "jpeg", "-s", "formatOptions", "88", ogPad, "--out", join(pub, "og.jpg"));
console.log("wrote public/og.jpg");
