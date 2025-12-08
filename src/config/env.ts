import "dotenv/config";

export const env = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "dev-secret",
    dbUrl: process.env.DATABASE_URL || "",
};
