import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export const AuthRepo = {
    findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),
    createUser: (data: any) => prisma.user.create({ data }),
};
