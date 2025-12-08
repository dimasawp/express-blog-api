import { Router } from "express";
import { ArticleController } from "./article.controller";
import { authMiddleware } from "../../common/middlewares/auth.middleware";

const router = Router();

router.get("/", ArticleController.getAll);
router.get("/search", ArticleController.search);
router.get("/:id", ArticleController.getById);
router.post("/", authMiddleware, ArticleController.create);
router.put("/:id", authMiddleware, ArticleController.update);
router.delete("/:id", authMiddleware, ArticleController.delete);

export default router;
