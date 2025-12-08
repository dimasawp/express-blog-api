import { prisma } from "../../config/prisma";

export const LikeRepo = {
    toggle: async (userId: number, articleId: number) => {
        const existing = await prisma.like.findUnique({ where: { articleId_userId: { articleId, userId } } });
        if (existing) return prisma.like.delete({ where: { id: existing.id } });
        return prisma.like.create({ data: { userId, articleId } });
    },
};
