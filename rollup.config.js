import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";

export default {
  input: "assets/index.ts",
  output: {
    file: "_site/assets/bundle.js",
    format: "cjs",
  },
  watch: {
    clearScreen: false
  },
  plugins: [
    typescript(),
    process.env.SITE_ENV === "production" ? terser() : null,
    css({ output: "bundle.css" }),
  ],
};
