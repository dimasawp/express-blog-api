import { Router } from "express";
import { CommentController } from "./comment.controller";

const router = Router();

router.post("/", CommentController.create);
router.get("/article/:articleId", CommentController.getByArticle);
router.delete("/:id", CommentController.delete);

export default router;
