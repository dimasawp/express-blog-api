import { Request, Response } from "express";
import { ArticleService } from "./article.service";

export const ArticleController = {
    create: async (req: Request, res: Response) => {
        const user = (req as any).users;
        const data = { ...req.body, authorId: user.id }; // Sementara, ganti dari JWT
        const result = await ArticleService.create(data);
        res.json(result);
    },

    getAll: async (req: Request, res: Response) => {
        const result = await ArticleService.getAll();
        res.json(result);
    },

    getById: async (req: Request, res: Response) => {
        const result = await ArticleService.getById(+req.params.id);
        res.json(result);
    },

    update: async (req: Request, res: Response) => {
        const result = await ArticleService.update(+req.params.id, req.body);
        res.json(result);
    },

    delete: async (req: Request, res: Response) => {
        const result = await ArticleService.delete(+req.params.id);
        res.json(result);
    },

    search: async (req: Request, res: Response) => {
        const result = await ArticleService.search(req.query.q as string);
        res.json(result);
    },
};
