import request from "supertest";
import { createApp } from "../src/app";
import { articleFactory, userFactory } from "./helpers/factories";

let app: any;
let token: string;
let articleId: number;

beforeAll(async () => {
    app = await createApp();
});

describe("Like API", () => {
    it("like article", async () => {
        token = await userFactory(app);
        const article = await articleFactory(app, token);
        articleId = article.id;

        const res = await request(app).post(`/likes/toggle`).set("Authorization", `Bearer ${token}`).send({
            articleId,
        });

        expect(res.status).toBe(200);
    });
});
