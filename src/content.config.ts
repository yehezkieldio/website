import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        isHighlighted: z.boolean().optional()
    })
});

export const collections = { projects };
