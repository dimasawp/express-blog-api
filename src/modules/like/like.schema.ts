import { z } from "zod";

export const toggleLikeSchema = z.object({
    articleId: z.number().int().positive(),
});
