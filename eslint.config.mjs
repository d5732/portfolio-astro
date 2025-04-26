import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
]);
