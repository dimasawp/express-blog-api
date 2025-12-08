import { prisma } from "../../config/prisma";

export const CommentRepo = {
    create: (data: any) => prisma.comment.create({ data }),
    findByArticle: (articleId: number) => prisma.comment.findMany({ where: { articleId }, include: { author: true } }),
    findById: (id: number) => prisma.comment.findUnique({ where: { id } }),
    delete: (id: number) => prisma.comment.delete({ where: { id } }),
};
