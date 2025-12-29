import { redis } from "../config/redis";

export const cacheGet = async (key: string) => {
    if (!redis) return null;
    return redis.get(key);
};

export const cacheSet = async (key: string, ttl: number, value: any) => {
    if (!redis) return;
    return redis.setEx(key, ttl, JSON.stringify(value));
};

export const cacheDel = async (key: string) => {
    if (!redis) return;
    return redis.del(key);
};
