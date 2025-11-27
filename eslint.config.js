import { defineConfig } from "eslint-define-config";
import babelParser from "@babel/eslint-parser";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig({
  languageOptions: {
    parser: babelParser,
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    globals: {
      // Node.js globals
      process: "readonly",
      __dirname: "readonly",
      module: "readonly",
      require: "readonly",
      console: "readonly",
      // Jest globals
      describe: "readonly",
      test: "readonly",
      expect: "readonly",
      beforeEach: "readonly",
      afterEach: "readonly",
    },
  },
  rules: {
    ...prettierConfig.rules,
  },
  plugins: {
    prettier: prettierPlugin,
  },
  linterOptions: {
    reportUnusedDisableDirectives: "warn",
  },
});
