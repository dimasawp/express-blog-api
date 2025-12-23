import { Router } from "express";
import { ArticleController } from "./article.controller";
import { authMiddleware } from "../../common/middlewares/auth.middleware";
import { asyncHandler } from "../../common/handlers/asyncHandler";

const router = Router();

router.get("/", asyncHandler(ArticleController.getAll));
router.get("/search", asyncHandler(ArticleController.search));
router.get("/:id", asyncHandler(ArticleController.getById));
router.post("/", authMiddleware, asyncHandler(ArticleController.create));
router.put("/:id", authMiddleware, asyncHandler(ArticleController.update));
router.delete("/:id", authMiddleware, asyncHandler(ArticleController.delete));

export default router;
