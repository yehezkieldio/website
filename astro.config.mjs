// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
    experimental: {
        contentIntellisense: true
    },
    compressHTML: false,
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
