import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export const ArticleRepo = {
    create: (data: any) => prisma.article.create({ data, include: { tags: true, comments: true, likes: true } }),
    findAll: () => prisma.article.findMany({ include: { tags: true, comments: true, likes: true } }),
    findById: (id: number) => prisma.article.findUnique({ where: { id }, include: { tags: true, comments: true, likes: true } }),
    update: (id: number, data: any) => prisma.article.update({ where: { id }, data }),
    delete: (id: number) => prisma.article.delete({ where: { id } }),
    search: (query: string) =>
        prisma.article.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: "insensitive" } },
                    { content: { contains: query, mode: "insensitive" } },
                    { tags: { some: { tag: { name: { contains: query, mode: "insensitive" } } } } },
                ],
            },
            include: { tags: true, comments: true, likes: true },
        }),
};
