import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    includeFiles: [
      // Adding this fixes the problem
      // "./node_modules/.pnpm/vscode-oniguruma@1.7.0/node_modules/vscode-oniguruma/release/onig.wasm",
    ],
  }),
});
