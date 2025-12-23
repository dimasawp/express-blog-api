import { Request, Response } from "express";
import { ArticleService } from "./article.service";
import { validate } from "../../utils/validate";
import { articleIdParam, createArticleSchema, searchQuerySchema, updateArticleSchema } from "./article.schema";

export const ArticleController = {
    create: async (req: Request, res: Response) => {
        const user = (req as any).user;

        const body = validate(createArticleSchema, req.body);

        const result = await ArticleService.create({ ...body, authorId: user.id });
        res.json(result);
    },

    getAll: async (req: Request, res: Response) => {
        const result = await ArticleService.getAll();
        res.json(result);
    },

    getById: async (req: Request, res: Response) => {
        const { id } = validate(articleIdParam, req.params);

        const result = await ArticleService.getById(id);
        res.json(result);
    },

    update: async (req: Request, res: Response) => {
        const user = (req as any).user;

        const { id } = validate(articleIdParam, req.params);
        const body = validate(updateArticleSchema, req.body);

        const result = await ArticleService.update(id, body, user.id);
        res.json(result);
    },

    delete: async (req: Request, res: Response) => {
        const user = (req as any).user;

        const { id } = validate(articleIdParam, req.params);

        const result = await ArticleService.delete(id, user.id);
        res.json(result);
    },

    search: async (req: Request, res: Response) => {
        const { q } = validate(searchQuerySchema, req.query);

        const result = await ArticleService.search(q);
        res.json(result);
    },
};
