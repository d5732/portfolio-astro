import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  // TypeScript recommended rules
  tseslint.configs.recommended,

  // Astro recommended rules
  eslintPluginAstro.configs.recommended,

  // JS environment + globals
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
  },

  // Ignore patterns
  {
    ignores: ["node_modules", "dist"],
  },
]);
