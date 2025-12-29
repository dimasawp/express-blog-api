import request from "supertest";
import { createApp } from "../src/app";

let app: any;

beforeAll(async () => {
    app = await createApp();
});

describe("Auth API", () => {
    it("register user", async () => {
        const res = await request(app).post("/auth/register").send({
            name: "Test User",
            email: "test@mail.com",
            password: "password123",
        });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
    });

    it("login user", async () => {
        await request(app).post("/auth/register").send({
            name: "Test User",
            email: "test@mail.com",
            password: "password123",
        });

        const res = await request(app).post("/auth/login").send({
            email: "test@mail.com",
            password: "password123",
        });

        expect(res.body.token).toBeDefined();
    });

    it("reject invalid login", async () => {
        await request(app).post("/auth/register").send({
            name: "Test User",
            email: "test@mail.com",
            password: "password123",
        });

        const res = await request(app).post("/auth/login").send({
            email: "test@mail.com",
            password: "wrongpassword",
        });

        expect(res.status).toBe(401);
    });
});
