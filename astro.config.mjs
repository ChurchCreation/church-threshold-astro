import { defineConfig } from 'astro/config';

export default defineConfig({
  // 'file' keeps the template's flat about.html URLs, which the runtime in
  // public/core/js/ depends on: ui.js marks the current nav link by comparing
  // the last path segment, and config.js fetches a relative church.config.json.
  build: { format: 'file' },
});
