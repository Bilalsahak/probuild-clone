// Lists every "OWNER TO CONFIRM" placeholder in the source so the owner can see what is open.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
const dirs = ["src", "content"];
let n = 0;
function walk(d) {
  for (const f of readdirSync(d)) {
    const p = join(d, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx|md)$/.test(p)) {
      readFileSync(p, "utf8").split("\n").forEach((line, i) => {
        if (/OWNER TO CONFIRM/i.test(line)) {
          n++;
          console.log(`${p}:${i + 1}: ${line.trim().slice(0, 140)}`);
        }
      });
    }
  }
}
dirs.forEach(walk);
console.log(`\n${n} open "OWNER TO CONFIRM" item(s). Edit src/config/site.ts for the main ones.`);
