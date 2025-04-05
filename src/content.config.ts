import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const projectTypeOrder = ["apps", "tools", "libs", "other"] as const;
export type ProjectType = (typeof projectTypeOrder)[number];

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        isHighlighted: z.boolean().optional(),
        type: z.enum(projectTypeOrder),
        createdAt: z.coerce.date().optional()
    })
});

export const collections = { projects };
