import { ApiError } from "../errors/ApiError";
import { Request, Response, NextFunction } from "express";

export const errorMiddleware = (err: any, req: Request, res: Response, _next: NextFunction) => {
    if (!(err instanceof ApiError)) {
        console.error(err);
    }

    if (err instanceof ApiError) {
        return res.status(err.status).json({ error: err.message });
    }

    return res.status(500).json({ error: "Internal Server Error" });
};
