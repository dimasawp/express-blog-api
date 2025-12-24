import { Router } from "express";
import { LikeController } from "./like.controller";
import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { asyncHandler } from "../../common/handlers/asyncHandler";

const router = Router();

router.post("/toggle", authMiddleware, asyncHandler(LikeController.toggle));

export default router;
