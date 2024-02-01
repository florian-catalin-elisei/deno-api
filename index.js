import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.js";
import PORT from "./config.js";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
