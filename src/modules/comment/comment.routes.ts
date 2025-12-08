import { Router } from "express";
import { CommentController } from "./comment.controller";
import { authMiddleware } from "../../common/middlewares/auth.middleware";

const router = Router();

router.get("/article/:articleId", CommentController.getByArticle);
router.post("/", authMiddleware, CommentController.create);
router.delete("/:id", authMiddleware, CommentController.delete);

export default router;
