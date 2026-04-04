import { cp, mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "mobile-www");

const rootFilesToCopy = new Set(["app.js", "astro-tools.js", "styles.css"]);
const rootDirectoriesToCopy = new Set(["assets", "vendor"]);

const shouldCopyRootEntry = (entryName) => {
  if (rootFilesToCopy.has(entryName) || rootDirectoriesToCopy.has(entryName)) {
    return true;
  }

  if (entryName.endsWith(".html")) {
    return true;
  }

  return false;
};

const main = async () => {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const rootEntries = await readdir(projectRoot, { withFileTypes: true });

  for (const entry of rootEntries) {
    if (!shouldCopyRootEntry(entry.name)) {
      continue;
    }

    const source = path.join(projectRoot, entry.name);
    const destination = path.join(outputDir, entry.name);

    await cp(source, destination, {
      recursive: true,
      force: true,
    });
  }

  console.log(`Prepared mobile web bundle in ${outputDir}`);
};

main().catch((error) => {
  console.error("Failed to prepare mobile web bundle:", error);
  process.exitCode = 1;
});
