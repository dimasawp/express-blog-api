import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { validate } from "../../utils/validate";
import { loginSchema, registerSchema } from "./auth.schema";

export const AuthController = {
    register: async (req: Request, res: Response) => {
        const body = validate(registerSchema, req.body);
        const data = await AuthService.register(body.name, body.email, body.password);
        res.json({ success: true, ...data });
    },

    login: async (req: Request, res: Response) => {
        const body = validate(loginSchema, req.body);
        const data = await AuthService.login(body.email, body.password);
        res.json({ success: true, ...data });
    },
};
