import request from "supertest";
import { createApp } from "../src/app";
import { userFactory, articleFactory } from "./helpers/factories";

let app: any;
let token: string;
let articleId: number;

beforeAll(async () => {
    app = await createApp();
});

describe("Article API", () => {
    it("create article", async () => {
        token = await userFactory(app);

        const res = await request(app)
            .post("/articles")
            .set("Authorization", `Bearer ${token}`)
            .send({
                title: "Test Article",
                content: "Content panjang",
                tags: ["tests"],
            });

        expect(res.status).toBe(200);
    });

    it("get all articles", async () => {
        token = await userFactory(app);
        await articleFactory(app, token);

        const res = await request(app).get("/articles");

        expect(res.body.length).toBeGreaterThan(0);
    });

    it("get article by id", async () => {
        token = await userFactory(app);
        const article = await articleFactory(app, token);
        articleId = article.id;

        const res = await request(app).get(`/articles/${articleId}`);

        expect(res.body.id).toBe(articleId);
    });

    it("update article", async () => {
        token = await userFactory(app);
        const article = await articleFactory(app, token);
        articleId = article.id;

        const res = await request(app)
            .put(`/articles/${articleId}`)
            .set("Authorization", `Bearer ${token}`)
            .send({
                title: "Updated Title",
                content: "Updated Content",
                tags: ["tests", "backend"],
            });

        expect(res.status).toBe(200);
        expect(res.body.title).toBe("Updated Title");
    });

    it("delete article", async () => {
        token = await userFactory(app);
        const article = await articleFactory(app, token);
        articleId = article.id;

        const res = await request(app).delete(`/articles/${articleId}`).set("Authorization", `Bearer ${token}`);

        expect(res.body.message).toBeDefined();
    });
});
