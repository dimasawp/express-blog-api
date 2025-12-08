import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/auth.routes";
import articleRoutes from "./modules/article/article.routes";
import commentRoutes from "./modules/comment/comment.routes";
import likeRoutes from "./modules/like/like.routes";
import { notFoundMiddleware } from "./common/middlewares/notFound.middleware";
import { errorMiddleware } from "./common/middlewares/error.middlware";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/articles", articleRoutes);
app.use("/comments", commentRoutes);
app.use("/likes", likeRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
