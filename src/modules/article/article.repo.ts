import { prisma } from "../../config/prisma";

export const ArticleRepo = {
    create: (data: any) => {
        const { tags, ...articleData } = data;

        return prisma.article.create({
            data: {
                ...articleData,
                tags: {
                    create: tags.map((t: string) => ({
                        tag: {
                            connectOrCreate: {
                                where: { name: t },
                                create: { name: t },
                            },
                        },
                    })),
                },
            },
            include: { tags: { include: { tag: true } }, comments: true, likes: true },
        });
    },
    findAll: () => prisma.article.findMany({ include: { tags: true, comments: true, likes: true } }),
    findById: (id: number) => prisma.article.findUnique({ where: { id }, include: { tags: true, comments: true, likes: true } }),
    update: (id: number, data: any) => {
        const { tags = [], ...rest } = data;

        return prisma.article.update({
            where: { id },
            data: {
                ...rest,
                tags: {
                    deleteMany: {}, // clear semua
                    create: tags.map((t: string) => ({
                        tag: {
                            connectOrCreate: {
                                where: { name: t },
                                create: { name: t },
                            },
                        },
                    })),
                },
            },
            include: { tags: true },
        });
    },
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
