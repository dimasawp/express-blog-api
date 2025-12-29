import request from "supertest";
import { Express } from "express";

export const userFactory = async (app: Express) => {
    const email = `test_${Date.now()}@mail.com`; // factori gunakan data.now untuk generate unik, kalo engga bakal error di testing
    const password = "password123";

    await request(app).post("/auth/register").send({
        name: "Test",
        email,
        password,
    });

    const login = await request(app).post("/auth/login").send({
        email,
        password,
    });

    return login.body.token;
};

export const articleFactory = async (app: Express, token: string) => {
    const res = await request(app)
        .post("/articles")
        .set("Authorization", `Bearer ${token}`)
        .send({
            title: "Test Article",
            content: "Content panjang",
            tags: ["tests"],
        });

    return res.body;
};
