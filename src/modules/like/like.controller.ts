import { Request, Response } from "express";
import { LikeService } from "./like.service";
import { validate } from "../../utils/validate";
import { toggleLikeSchema } from "./like.schema";

export const LikeController = {
    toggle: async (req: Request, res: Response) => {
        const user = (req as any).user;

        const { articleId } = validate(toggleLikeSchema, req.body);

        const result = await LikeService.toggle(user.id, articleId);
        res.json(result);
    },
};
