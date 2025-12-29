import request from "supertest";
import { createApp } from "../src/app";
import { articleFactory, userFactory } from "./helpers/factories";

let app: any;
let token: string;
let articleId: number;

beforeAll(async () => {
    app = await createApp();
});

describe("Comment API", () => {
    it("create comment", async () => {
        token = await userFactory(app);
        const article = await articleFactory(app, token);
        articleId = article.id;

        const res = await request(app).post("/comments").set("Authorization", `Bearer ${token}`).send({
            content: "Menarik!!",
            articleId,
        });

        expect(res.status).toBe(200);
    });

    it("get comment by article", async () => {
        token = await userFactory(app);
        const article = await articleFactory(app, token);
        articleId = article.id;
        await request(app).post("/comments").set("Authorization", `Bearer ${token}`).send({
            content: "Menarik!!",
            articleId,
        });

        const res = await request(app).get(`/comments/article/${articleId}`);

        expect(res.body.length).toBeGreaterThan(0);
    });

    it("delete comment", async () => {
        token = await userFactory(app);
        const article = await articleFactory(app, token);
        articleId = article.id;
        const comment = await request(app).post("/comments").set("Authorization", `Bearer ${token}`).send({
            content: "Menarik!!",
            articleId,
        });

        const res = await request(app).delete(`/comments/${comment.body.id}`).set("Authorization", `Bearer ${token}`);

        expect(res.status).toBe(200);
    });
});
