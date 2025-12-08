import { Router } from "express";
import { LikeController } from "./like.controller";
import { authMiddleware } from "../../common/middlewares/auth.middleware";

const router = Router();

router.post("/toggle", authMiddleware, LikeController.toggle);

export default router;
