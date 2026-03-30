export default [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      ".eslintcache",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },
  {
    extends: [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:import/recommended",
    ],
  },
];
