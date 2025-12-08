import { Request, Response } from "express";
import { CommentService } from "./comment.service";

export const CommentController = {
    create: async (req: Request, res: Response) => {
        const user = (req as any).user;
        const data = { ...req.body, userId: user.id };
        const result = await CommentService.create(data);
        res.json(result);
    },

    getByArticle: async (req: Request, res: Response) => {
        const result = await CommentService.getByArticle(+req.params.articleId);
        res.json(result);
    },

    delete: async (req: Request, res: Response) => {
        const user = (req as any).user;
        const result = await CommentService.delete(+req.params.id, user.id);
        res.json(result);
    },
};
