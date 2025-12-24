import { Router } from "express";
import { CommentController } from "./comment.controller";
import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { asyncHandler } from "../../common/handlers/asyncHandler";

const router = Router();

router.get("/article/:articleId", asyncHandler(CommentController.getByArticle));
router.post("/", authMiddleware, asyncHandler(CommentController.create));
router.delete("/:id", authMiddleware, asyncHandler(CommentController.delete));

export default router;
