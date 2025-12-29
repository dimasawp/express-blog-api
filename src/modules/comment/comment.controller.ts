import { Request, Response } from "express";
import { CommentService } from "./comment.service";
import { validate } from "../../utils/validate";
import { articleIdParam, commentIdParam, createCommentSchema } from "./comment.schema";

export const CommentController = {
    create: async (req: Request, res: Response) => {
        const user = (req as any).user;

        const body = validate(createCommentSchema, req.body);

        const result = await CommentService.create({ ...body, userId: user.id });
        res.json(result);
    },

    getByArticle: async (req: Request, res: Response) => {
        const { articleId } = validate(articleIdParam, req.params);

        const result = await CommentService.getByArticle(articleId);
        res.json(result);
    },

    delete: async (req: Request, res: Response) => {
        const user = (req as any).user;

        const { id } = validate(commentIdParam, req.params);

        const result = await CommentService.delete(id, user.id);
        res.json(result);
    },
};
