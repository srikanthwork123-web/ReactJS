import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const viteCacheDir = path.join(projectRoot, 'node_modules', '.vite');

if (fs.existsSync(viteCacheDir)) {
  fs.rmSync(viteCacheDir, { recursive: true, force: true });
  console.log(`Removed Vite cache: ${viteCacheDir}`);
} else {
  console.log(`No Vite cache found at: ${viteCacheDir}`);
}
