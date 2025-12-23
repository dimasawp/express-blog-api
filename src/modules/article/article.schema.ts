import { z } from "zod";

export const createArticleSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(10),
    tags: z.array(z.string()).optional(),
});

export const updateArticleSchema = createArticleSchema.partial();

export const articleIdParam = z.object({
    id: z.coerce.number().int().positive(),
});

export const searchQuerySchema = z.object({
    q: z.string().min(2),
});
