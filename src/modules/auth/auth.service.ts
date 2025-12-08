import { AuthRepo } from "./auth.repo";
import { ThrowError } from "../../common/errors/ApiError";
import { comparePassword, hashPassword } from "../../utils/password";
import { signToken } from "../../utils/jwt";

export const AuthService = {
    register: async (name: string, email: string, password: string) => {
        const exists = await AuthRepo.findByEmail(email);
        if (exists) ThrowError(400, "Email already registered");

        const hashed = hashPassword(password);
        await AuthRepo.createUser({ name, email, password: hashed });

        return { message: "User registered" };
    },

    login: async (email: string, password: string) => {
        const user = await AuthRepo.findByEmail(email);
        if (!user) return ThrowError(401, "Invalid credentials");

        const match = comparePassword(password, user.password);
        if (!match) return ThrowError(401, "Invalid credentials");

        const token = signToken({ id: user.id, email: user.email });
        return { token };
    },
};
