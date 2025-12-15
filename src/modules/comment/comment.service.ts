import { ThrowError } from "../../common/errors/ApiError";
import { CommentRepo } from "./comment.repo";

export const CommentService = {
    create: (data: any) => CommentRepo.create(data),
    getByArticle: (articleId: number) => CommentRepo.findByArticle(articleId),
    delete: async (id: number, userId: number) => {
        const comment = await CommentRepo.findById(id);
        if (!comment) return ThrowError(404, "Comment not found");

        if (comment.userId !== userId) return ThrowError(403, "You do not own this comment");

        await CommentRepo.delete(id);
        return { message: "Comment Deleted" };
    },
};
