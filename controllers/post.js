import todos from "../data/todos.json" assert { type: "json" };

const createTodo = async (context) => {
  try {
    const result = context.request.body();

    if (result.type === "json") {
      const value = await result.value;
      const { task } = value;
      const newTask = { id: todos.length + 1, task, completed: false };
      todos.push(newTask);

      await Deno.writeTextFile("data/todos.json", JSON.stringify(todos));

      context.response.status = 201;
      context.response.body = { status: "success", newTask };
    }

    return;
  } catch (error) {
    context.response.status = 502;
    context.response.body = { status: "Failed to create a new task", error: error.message };
  }
};

export default createTodo;
