import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Strict TypeScript rules
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/no-misused-promises": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/prefer-readonly-parameter-types": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],

      // Strict JavaScript rules
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "no-return-assign": "error",
      "no-sequences": "error",
      "no-throw-literal": "error",
      "no-unmodified-loop-condition": "error",
      "no-unused-expressions": "error",
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "prefer-promise-reject-errors": "error",
      "require-await": "error",
      yoda: "error",

      // Code quality and consistency
      "array-callback-return": "error",
      "consistent-return": "error",
      curly: ["error", "all"],
      "default-case": "error",
      "default-case-last": "error",
      "dot-notation": "error",
      eqeqeq: ["error", "always"],
      "grouped-accessor-pairs": "error",
      "guard-for-in": "error",
      "max-classes-per-file": ["error", 1],
      "no-constructor-return": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-empty-function": "error",
      "no-lonely-if": "error",
      "no-magic-numbers": ["warn", { ignore: [0, 1, -1] }],
      "no-negated-condition": "error",
      "no-nested-ternary": "error",
      "no-param-reassign": "error",
      "no-shadow": "error",
      "no-unneeded-ternary": "error",
      "object-shorthand": "error",
      "prefer-arrow-callback": "error",
      "prefer-destructuring": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      radix: "error",

      // React/Next.js specific strict rules
      "react/jsx-boolean-value": ["error", "never"],
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
      "react/jsx-fragments": ["error", "syntax"],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-sort-props": [
        "error",
        { callbacksLast: true, shorthandFirst: true },
      ],
      "react/no-array-index-key": "error",
      "react/no-danger": "error",
      "react/self-closing-comp": "error",
      "react-hooks/exhaustive-deps": "error",

      // Import/export rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc" },
        },
      ],
      "import/no-default-export": "error",
      "import/prefer-default-export": "off",

      // Formatting (if not using Prettier)
      "comma-dangle": ["error", "always-multiline"],
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "always"],
      "trailing-comma": "off",
    },
    overrides: [
      {
        files: ["pages/**/*", "app/**/*", "next.config.*"],
        rules: {
          // Allow default exports for Next.js pages and config files
          "import/no-default-export": "off",
          "import/prefer-default-export": "error",
        },
      },
    ],
  },
];

export default eslintConfig;
