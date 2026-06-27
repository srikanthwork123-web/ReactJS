import path from 'node:path'
import os from 'node:os'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const cacheDir = path.join(os.tmpdir(), 'vite-cache', 'cruddemo')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir,
})
