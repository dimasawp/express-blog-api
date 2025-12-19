import { ThrowError } from "../../common/errors/ApiError";
import { prisma } from "../../config/prisma";
import { ArticleRepo } from "./article.repo";
import { redis } from "../../config/redis";

export const ArticleService = {
    create: (data: any) => ArticleRepo.create(data),
    getAll: async () => {
        const cache = await redis.get("articles:all");
        if (cache) return JSON.parse(cache);

        const data = await ArticleRepo.findAll();
        await redis.setEx("articles:all", 60, JSON.stringify(data));
        return data;
    },
    getById: async (id: number) => {
        const key = `articles:${id}`;

        const cache = await redis.get(key);
        if (cache) return JSON.parse(cache);

        const data = await ArticleRepo.findById(id);
        if (data) await redis.setEx(key, 60, JSON.stringify(data));
        return data;
    },
    update: async (id: number, data: any, userId: number) => {
        const article = await ArticleRepo.findById(id);
        if (!article) ThrowError(404, "Article not found");

        if (article?.authorId !== userId) ThrowError(403, "You do not own this article");

        const result = await ArticleRepo.update(id, data);
        return result;
    },
    delete: async (id: number, userId: number) => {
        const article = await ArticleRepo.findById(id);
        if (!article) ThrowError(404, "Article not found");

        if (article?.authorId !== userId) ThrowError(403, "You do not own this article");

        await prisma.$transaction([
            prisma.comment.deleteMany({ where: { articleId: id } }),
            prisma.like.deleteMany({ where: { articleId: id } }),
            prisma.article.deleteMany({ where: { id } }),
        ]);

        return { message: "Article deleted" };
    },
    search: (query: string) => ArticleRepo.search(query),
};
