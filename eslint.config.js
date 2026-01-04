import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  {
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": "warn",
      "yoda": "error",
      "no-var": "error",
      "no-inline-comments": "error",
      "no-empty-function": "error",
      "no-duplicate-case": "error",
    }
  }
]);