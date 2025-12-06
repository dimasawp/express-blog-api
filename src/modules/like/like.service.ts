import { LikeRepo } from "./like.repo";

export const LikeService = {
    toggle: (userId: number, articleId: number) => LikeRepo.toggle(userId, articleId),
};
