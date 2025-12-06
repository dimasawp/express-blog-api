import { Request, Response } from "express";
import { LikeService } from "./like.service";

export const LikeController = {
    toggle: async (req: Request, res: Response) => {
        const { userId, articleId } = req.body;
        const result = await LikeService.toggle(userId, articleId);
        res.json(result);
    },
};
