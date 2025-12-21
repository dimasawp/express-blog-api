import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/auth.routes";
import articleRoutes from "./modules/article/article.routes";
import commentRoutes from "./modules/comment/comment.routes";
import likeRoutes from "./modules/like/like.routes";
import { notFoundMiddleware } from "./common/middlewares/notFound.middleware";
import { errorMiddleware } from "./common/middlewares/error.middlware";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolver";

export const createApp = async () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // REST routes
    app.use("/auth", authRoutes);
    app.use("/articles", articleRoutes);
    app.use("/comments", commentRoutes);
    app.use("/likes", likeRoutes);

    // GraphQL (READ ONLY)
    const apollo = new ApolloServer({ typeDefs, resolvers });
    await apollo.start();
    apollo.applyMiddleware({ app: app as any, path: "/graphql" });

    // Global Middleware
    app.use(notFoundMiddleware);
    app.use(errorMiddleware);

    return app;
};
