import { Router } from "express";
import { ArticleController } from "./article.controller";

const router = Router();

router.post("/", ArticleController.create);
router.get("/", ArticleController.getAll);
router.get("/search", ArticleController.search);
router.get("/:id", ArticleController.getById);
router.put("/:id", ArticleController.update);
router.delete("/:id", ArticleController.delete);

export default router;
