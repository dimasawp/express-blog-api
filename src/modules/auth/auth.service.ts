import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AuthRepo } from "./auth.repo";

export const AuthService = {
    register: async (name: string, email: string, password: string) => {
        const hashed = await bcrypt.hash(password, 10);
        await AuthRepo.createUser({ name, email, password: hashed });
        return { message: "User registered" };
    },

    login: async (email: string, password: string) => {
        const user = await AuthRepo.findByEmail(email);
        if (!user) throw new Error("Invalid credentials");

        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new Error("Invalid credentials");

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, { expiresIn: "1d" });
        return token;
    },
};
