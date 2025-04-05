// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://yehezkieldio.vercel.app",
    compressHTML: false,
    integrations: [
        sitemap(),
        mdx({
            syntaxHighlight: "shiki",
            shikiConfig: { theme: "catppuccin-mocha" }
        })
    ],
    vite: {
        plugins: [tailwindcss()],
        css: {
            transformer: "lightningcss"
        },
        build: {
            cssMinify: "lightningcss"
        }
    }
});
