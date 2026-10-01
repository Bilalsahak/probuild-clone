// Fails if the built site (./out) contains claims/strings the legal review removed.
// Run after `npm run build`:  npm run check:forbidden
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = "out";
const checks = [
  ["bonded", /bonded/i],
  ["5 Stars", /5 stars/i],
  ["80+", /80\+/],
  ["Google (any)", /google/i],
  ["star glyph", /[★⭐☆]/],
  ["ProBuild", /pro\s?build/i],
  ["flawless", /flawless/i],
  ["guarantee", /guarantee/i],
  ["premier", /premier/i],
  ["Architecture, Engineering", /architecture,? engineering/i],
  ["MEP / health department", /\bMEP\b|health[- ]department/i],
  ["decades", /decades/i],
  ["fully insured", /fully insured/i],
  ["EPA lead-safe claim", /follow EPA/i],
  ["No spam / mailing list", /no spam|mailing list/i],
  ["SECURE PROJECT REQUEST", /secure project request/i],
  ["WHAT CLIENTS SAY", /what clients say/i],
  ["highest inspection", /highest inspection/i],
  ["real photos from completed", /real photos from completed/i],
  ["tailwind/cdnjs/google fonts CDN", /cdn\.tailwindcss|cdnjs\.cloudflare|fonts\.googleapis|fonts\.gstatic/i],
];

const exts = new Set([".html", ".txt", ".xml", ".js", ".css", ".json"]);
let failures = 0;
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (exts.has(extname(p))) scan(p);
  }
}
function scan(file) {
  // Only scan page output and our own JS chunks' text content for user-visible claims.
  if (file.includes("/_next/static/chunks/") && !file.endsWith(".js")) return;
  let text = readFileSync(file, "utf8");
  if (file.endsWith(".js") || file.endsWith(".css")) {
    // Framework chunks legitimately contain unrelated words; only check CDN + glyph rules there.
    const light = checks.filter(([n]) => n.startsWith("tailwind") || n === "star glyph");
    for (const [name, re] of light) if (re.test(text)) report(file, name, re, text);
    return;
  }
  for (const [name, re] of checks) {
    if (re.test(text)) report(file, name, re, text);
  }
}
function report(file, name, re, text) {
  failures++;
  const m = text.match(new RegExp(`.{0,50}${re.source}.{0,50}`, re.flags.replace("g", "")));
  console.error(`FORBIDDEN [${name}] in ${file}: ${m ? m[0] : ""}`);
}
walk(root);
if (failures) {
  console.error(`\n${failures} forbidden-string hit(s).`);
  process.exit(1);
}
console.log("check:forbidden OK — no forbidden strings in ./out");
