import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export const CommentRepo = {
    create: (data: any) => prisma.comment.create({ data }),
    findByArticle: (articleId: number) => prisma.comment.findMany({ where: { articleId } }),
    delete: (id: number) => prisma.comment.delete({ where: { id } }),
};
