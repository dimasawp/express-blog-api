import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const signToken = (payload: any) => jwt.sign(payload, env.jwtSecret, { expiresIn: "1d" });
export const verifyToken = (token: string) => jwt.verify(token, env.jwtSecret);
