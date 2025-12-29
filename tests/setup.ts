import { prisma } from "../src/config/prisma";

beforeAll(async () => {
    await prisma.$connect();
});

afterEach(async () => {
    await prisma.$transaction([
        prisma.articleTag.deleteMany(),
        prisma.tag.deleteMany(),
        prisma.like.deleteMany(),
        prisma.comment.deleteMany(),
        prisma.article.deleteMany(),
        prisma.user.deleteMany(),
    ]);
});

afterAll(async () => {
    await prisma.$disconnect();
});
