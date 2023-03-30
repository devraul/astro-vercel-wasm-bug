import { defineConfig } from "astro/config";
import { resolve } from "import-meta-resolve";

import vercel from "@astrojs/vercel/serverless";

const vsCodeOnigurumaPath = new URL(
  "onig.wasm",
  await resolve("vscode-oniguruma", import.meta.url)
).pathname;

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    // includeFiles: [vsCodeOnigurumaPath],
  }),
});
