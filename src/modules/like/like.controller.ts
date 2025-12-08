import { Request, Response } from "express";
import { LikeService } from "./like.service";

export const LikeController = {
    toggle: async (req: Request, res: Response) => {
        const user = (req as any).user;
        const { articleId } = req.body;
        const result = await LikeService.toggle(user.id, articleId);
        res.json(result);
    },
};
