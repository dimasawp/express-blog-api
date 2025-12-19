import { env } from "./config/env";
import app from "./app";
import { connectRedis } from "./config/redis";

connectRedis().then(() => {
    app.listen(env.port, () => {
        console.log(`Server running at http://localhost:${env.port}`);
    });
});
