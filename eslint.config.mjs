// @ts-check

import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
    {
        ignores: ["dist/", ".astro/", ".local/"]
    },
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node
            }
        }
    },
    js.configs.recommended,
    ts.configs.eslintRecommended,
    ts.configs.recommended,
    ts.configs.stylistic,
    astro.configs.recommended,
    astro.configs["jsx-a11y-recommended"],
    prettier,
    {
        plugins: {
            perfectionist
        },
        rules: {
            "perfectionist/sort-imports": "error",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/triple-slash-reference": ["error", { path: "always" }],
            "@typescript-eslint/no-unused-expressions": ["error", { allowTernary: true }],
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "all",
                    argsIgnorePattern: "^_",
                    caughtErrors: "all",
                    caughtErrorsIgnorePattern: "^_",
                    destructuredArrayIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    ignoreRestSiblings: true
                }
            ]
        }
    }
);
