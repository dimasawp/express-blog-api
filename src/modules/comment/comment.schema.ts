import { z } from "zod";

export const createCommentSchema = z.object({
    content: z.string().min(1),
    articleId: z.number().int().positive(),
});

export const commentIdParam = z.object({
    id: z.coerce.number().int().positive(),
});

export const articleIdParam = z.object({
    articleId: z.coerce.number().int().positive(),
});
