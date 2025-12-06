import { Router } from "express";
import { LikeController } from "./like.controller";

const router = Router();

router.post("/toggle", LikeController.toggle);

export default router;
