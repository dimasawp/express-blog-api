import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/auth.routes";
import articleRoutes from "./modules/article/article.routes";
import commentRoutes from "./modules/comment/comment.routes";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/articles", articleRoutes);
app.use("/comments", commentRoutes);

export default app;
