import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("../", import.meta.url));
const distDir = join(rootDir, "dist");
const rootFiles = (await readdir(rootDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile())
  .filter((entry) => [".html", ".js", ".css"].includes(extname(entry.name)))
  .map((entry) => entry.name);
const siteEntries = [...rootFiles, "assets", "vendor"];

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });

for (const entry of siteEntries) {
  await cp(join(rootDir, entry), join(distDir, entry), { recursive: true });
}

await writeFile(join(distDir, ".nojekyll"), "");
console.log(`GitHub Pages paketi hazır: ${distDir}`);
