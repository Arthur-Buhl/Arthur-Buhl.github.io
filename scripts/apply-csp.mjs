import { createHash } from "node:crypto";
import { readdirSync, readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "out";

// Regex des scripts inline (sans attribut src).
const INLINE_SCRIPT = /<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/gi;
const META_CSP = /<meta http-equiv="Content-Security-Policy"[^>]*>\s*/gi;

function sha256(content) {
  return "sha256-" + createHash("sha256").update(content, "utf8").digest("base64");
}

function buildCsp(hashes) {
  const scriptSrc = ["'self'", ...hashes].join(" ");
  return [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (entry.endsWith(".html")) files.push(full);
  }
  return files;
}

let patched = 0;
for (const file of walk(OUT_DIR)) {
  let html = readFileSync(file, "utf8");

  const hashes = new Set();
  let match;
  INLINE_SCRIPT.lastIndex = 0;
  while ((match = INLINE_SCRIPT.exec(html)) !== null) {
    hashes.add(sha256(match[1]));
  }

  const meta = `<meta http-equiv="Content-Security-Policy" content="${buildCsp([
    ...hashes,
  ])}">`;

  html = html.replace(META_CSP, "");
  html = html.replace(/<head>/i, `<head>${meta}`);

  writeFileSync(file, html);
  patched += 1;
}

console.log(`CSP appliquée à ${patched} fichier(s) HTML.`);
