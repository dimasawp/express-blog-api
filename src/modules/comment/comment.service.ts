import { CommentRepo } from "./comment.repo";

export const CommentService = {
    create: (data: any) => CommentRepo.create(data),
    getByArticle: (articleId: number) => CommentRepo.findByArticle(articleId),
    delete: (id: number) => CommentRepo.delete(id),
};
