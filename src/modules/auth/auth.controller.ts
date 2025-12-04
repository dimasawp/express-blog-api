import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export const AuthController = {
    register: async (req: Request, res: Response) => {
        const { name, email, password } = req.body;
        const result = await AuthService.register(name, email, password);
        res.json(result);
    },
    login: async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const result = await AuthService.login(email, password);
        res.json(result);
    },
};
