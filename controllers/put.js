import todos from "../data/todos.json" assert { type: "json" };

const updateTodo = async (context) => {
  try {
    const result = context.request.body();

    if (result.type === "json") {
      const value = await result.value;
      const { task, completed } = value;

      const updatedTodos = todos.map((todo) => {
        if (todo.id === Number(context.params.id)) {
          return { ...todo, task, completed };
        }

        return todo;
      });

      todos.length = 0;
      todos.push(...updatedTodos);

      await Deno.writeTextFile("data/todos.json", JSON.stringify(updatedTodos));

      context.response.status = 204;
      context.response.body = null;
    }
  } catch (error) {
    context.response.status = 502;
    context.response.body = { status: "Failed to update", error: error.message };
  }
};

export default updateTodo;
