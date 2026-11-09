// Generates public/banner.svg: an original dusk-skyline illustration used as
// the hero banner. Seeded, so re-running produces the same file.
// Run: node scripts/generate-banner.mjs
import { writeFileSync } from "node:fs";

const W = 1640;
const H = 436;

let seed = 20260913;
const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
};
const between = (min, max) => min + rand() * (max - min);

const parts = [];

parts.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" role="img" aria-label="A city skyline at dusk with lit windows and a tower beacon.">`);
parts.push(`<defs>
<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stop-color="#0d0f11"/>
<stop offset=".55" stop-color="#24272a"/>
<stop offset=".82" stop-color="#8f7a55"/>
<stop offset="1" stop-color="#c9b48a"/>
</linearGradient>
<radialGradient id="glow" cx=".5" cy="1" r=".6">
<stop offset="0" stop-color="#ffd9a0" stop-opacity=".55"/>
<stop offset="1" stop-color="#ffd9a0" stop-opacity="0"/>
</radialGradient>
</defs>`);
parts.push(`<rect width="${W}" height="${H}" fill="url(#sky)"/>`);
parts.push(`<ellipse cx="${W * 0.62}" cy="${H}" rx="${W * 0.5}" ry="${H * 0.7}" fill="url(#glow)"/>`);

// Stars, fading toward the horizon.
for (let i = 0; i < 90; i += 1) {
    const x = between(0, W);
    const y = between(0, H * 0.5);
    const r = between(0.5, 1.3);
    const o = between(0.25, 0.8) * (1 - y / (H * 0.55));
    parts.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(2)}" fill="#e9e9e5" opacity="${o.toFixed(2)}"/>`);
}

function layer({ base, minH, maxH, minW, maxW, fill, windowColor, windowDensity, windowOpacity }) {
    let x = -20;
    while (x < W + 20) {
        const w = between(minW, maxW);
        const h = between(minH, maxH);
        const top = base - h;
        parts.push(`<rect x="${x.toFixed(1)}" y="${top.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" fill="${fill}"/>`);
        if (windowColor) {
            const cols = Math.max(1, Math.floor(w / 9));
            const rows = Math.max(1, Math.floor(h / 11));
            for (let c = 0; c < cols; c += 1) {
                for (let r = 0; r < rows; r += 1) {
                    if (rand() < windowDensity) {
                        const wx = x + 4 + c * ((w - 8) / cols);
                        const wy = top + 6 + r * ((h - 10) / rows);
                        parts.push(`<rect x="${wx.toFixed(1)}" y="${wy.toFixed(1)}" width="3" height="4" fill="${windowColor}" opacity="${(windowOpacity * between(0.5, 1)).toFixed(2)}"/>`);
                    }
                }
            }
        }
        x += w + between(0, 4);
    }
}

layer({ base: H, minH: 150, maxH: 250, minW: 28, maxW: 64, fill: "#1b1e20", windowColor: null, windowDensity: 0, windowOpacity: 0 });
layer({ base: H, minH: 90, maxH: 190, minW: 26, maxW: 70, fill: "#15181a", windowColor: "#ffcf8a", windowDensity: 0.12, windowOpacity: 0.5 });
layer({ base: H + 4, minH: 50, maxH: 130, minW: 30, maxW: 80, fill: "#0d0f10", windowColor: "#ffdfa6", windowDensity: 0.22, windowOpacity: 0.85 });

// A tall tower with a beacon, off-centre, as the focal point.
const tx = W * 0.7;
parts.push(`<rect x="${tx - 22}" y="${H - 300}" width="44" height="300" fill="#08090a"/>`);
parts.push(`<rect x="${tx - 3}" y="${H - 360}" width="6" height="62" fill="#08090a"/>`);
parts.push(`<circle cx="${tx}" cy="${H - 364}" r="4" fill="#c9b48a"/>`);
parts.push(`<circle cx="${tx}" cy="${H - 364}" r="11" fill="#c9b48a" opacity=".22"/>`);
for (let r = 0; r < 24; r += 1) {
    for (let c = 0; c < 3; c += 1) {
        if (rand() < 0.35) {
            parts.push(`<rect x="${tx - 16 + c * 11}" y="${H - 290 + r * 11}" width="4" height="5" fill="#ffdfa6" opacity="${between(0.55, 0.95).toFixed(2)}"/>`);
        }
    }
}

parts.push(`</svg>`);
writeFileSync(new URL("../public/banner.svg", import.meta.url), parts.join("\n"));
console.log("wrote public/banner.svg");
