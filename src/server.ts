import { env } from "./config/env";
import { connectRedis } from "./config/redis";
import { createApp } from "./app";

const bootstrap = async () => {
    await connectRedis();
    const app = await createApp();

    app.listen(env.port, () => {
        console.log(`Server running at http://localhost:${env.port}`);
        console.log(`GraphQL at http://localhost:${env.port}/graphql`);
    });
};

bootstrap();
