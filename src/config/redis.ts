import { createClient } from "redis";
import { env } from "./env";

const isTest = process.env.NODE_ENV === "test";

export const redis = isTest
    ? null
    : createClient({
          url: env.redisUrl,
      });

if (redis) {
    redis.on("error", (err) => console.error("Redis error", err));
}

export const connectRedis = async () => {
    if (!redis) return;
    if (!redis.isOpen) await redis.connect();
};
