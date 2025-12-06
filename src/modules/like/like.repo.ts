import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export const LikeRepo = {
    toggle: async (userId: number, articleId: number) => {
        const existing = await prisma.like.findUnique({ where: { articleId_userId: { articleId, userId } } });
        if (existing) return prisma.like.delete({ where: { id: existing.id } });
        return prisma.like.create({ data: { userId, articleId } });
    },
};
