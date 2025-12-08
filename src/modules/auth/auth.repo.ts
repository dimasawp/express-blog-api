import { prisma } from "../../config/prisma";

export const AuthRepo = {
    findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),
    createUser: (data: any) => prisma.user.create({ data }),
};
