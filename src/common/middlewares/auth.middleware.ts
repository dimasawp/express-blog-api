import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../../utils/jwt";
import { ThrowError } from "../errors/ApiError";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;
    if (!auth) return ThrowError(401, "Missing token");

    const token = auth.split(" ")[1];
    try {
        const payload = verifyToken(token);
        (req as any).user = payload;
        next();
    } catch (error) {
        ThrowError(401, "Invalid token");
    }
};
