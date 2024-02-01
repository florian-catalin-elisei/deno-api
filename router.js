import { Router } from "https://deno.land/x/oak/mod.ts";
import getTodos from "./controllers/get.js";
import createTodo from "./controllers/post.js";
import deleteTodo from "./controllers/delete.js";
import updateTodo from "./controllers/put.js";

const router = new Router();
router.get("/", (context) => {
  context.response.body = "Todo List API";
});

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.delete("/todos/:id", deleteTodo);
router.put("/todos/:id", updateTodo);

export default router;
