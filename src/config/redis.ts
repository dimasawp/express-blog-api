import { createClient } from "redis";
import { env } from "./env";

export const redis = createClient({
    url: env.redisUrl,
});

redis.on("error", (err) => console.error("Redis error", err));

export const connectRedis = async () => {
    if (!redis.isOpen) await redis.connect();
};
