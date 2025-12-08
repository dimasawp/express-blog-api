import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const AuthController = {
    register: async (req: Request, res: Response) => {
        const { name, email, password } = req.body;
        const data = await AuthService.register(name, email, password);
        res.json({ success: true, ...data });
    },

    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const data = await AuthService.login(email, password);
        res.json({ success: true, ...data });
    },
};
