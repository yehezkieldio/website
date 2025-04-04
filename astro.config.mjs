// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://yehezkieldio.vercel.app",
    experimental: {
        contentIntellisense: true
    },
    compressHTML: false,
    vite: {
        plugins: [
            sitemap(),
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
