// @ts-check
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
    experimental: {
        contentIntellisense: true
    },
    compressHTML: false,
    vite: {
        plugins: [
            tailwindcss(),
            mdx({
                syntaxHighlight: "shiki",
                shikiConfig: { theme: "catppuccin-mocha" }
            })
        ],
        css: {
            transformer: "lightningcss"
        },
        build: {
            cssMinify: "lightningcss"
        }
    }
});
