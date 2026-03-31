import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEFAULT_PORT = 8011;
const portValue = process.env.PORT ?? String(DEFAULT_PORT);
const PORT = Number.parseInt(portValue, 10);

if (Number.isNaN(PORT)) {
  throw new Error(`Gecersiz PORT degeri: ${portValue}`);
}

const MIME_TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
};

const getContentType = (filePath) => MIME_TYPES[path.extname(filePath).toLowerCase()] ?? "application/octet-stream";

const resolvePath = (requestPath) => {
  const cleanPath = decodeURIComponent(requestPath.split("?")[0]);
  const filePath = cleanPath === "/" ? "/index.html" : cleanPath;
  const resolvedPath = path.resolve(__dirname, `.${filePath}`);

  if (!resolvedPath.startsWith(__dirname)) {
    return null;
  }

  return resolvedPath;
};

const server = createServer(async (request, response) => {
  const url = request.url ?? "/";
  const filePath = resolvePath(url);

  if (!filePath) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Erisim reddedildi.");
    return;
  }

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": getContentType(filePath),
      "Cache-Control": "no-store",
    });
    response.end(file);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Dosya bulunamadi.");
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`AstroHesap hazir: http://127.0.0.1:${PORT}/index.html`);
});
