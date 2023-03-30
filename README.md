# Astro + Vercel Adapter => .wasm build bug

## Repro

1. Install deps with `pnpm`;
2. you can run it locally (`pnpm run dev`) and see the working version
3. open `node_modules/.pnpm/vscode-oniguruma@1.7.0/node_modules/vscode-oniguruma/release` folder and see the `onig.wasm` file there;
4. now, builds the project using `pnpm run build` (this will creates a .vercel folder);
5. open `.vercel/output/functions/render.func/node_modules/.pnpm/vscode-oniguruma@1.7.0/node_modules/vscode-oniguruma/release` and the `onig.wasm` file won't be there.

## Workaround

By pointing the .wasm file on `astro.config.mjs` and run build, it does includes:

```js
export default defineConfig({
  output: "server",
  adapter: vercel({
    includeFiles: [
      "./node_modules/.pnpm/vscode-oniguruma@1.7.0/node_modules/vscode-oniguruma/release/onig.wasm",
    ],
  }),
});
```
