/** @type {import("prettier").Config} */
export default {
    useTabs: false,
    semi: true,
    trailingComma: "es5",
    tabWidth: 4,
    bracketSpacing: true,
    singleQuote: false,
    arrowParens: "always",
    quoteProps: "consistent",
    printWidth: 120,
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
      {
        files: "*.astro",
        options: {
          parser: "astro",
        },
      },
    ],
  };