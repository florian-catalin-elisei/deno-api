import todos from "../data/todos.json" assert { type: "json" };

const deleteTodo = async (context) => {
  try {
    const newTodos = todos.filter((todo) => todo.id !== Number(context.params.id));

    todos.length = 0;
    todos.push(...newTodos);
    await Deno.writeTextFile("data/todos.json", JSON.stringify(newTodos));

    context.response.status = 200;
    context.response.body = { status: "success", todos };
  } catch (error) {
    context.response.status = 502;
    context.response.body = { status: "Failed to delete", error: error.message };
  }
};

export default deleteTodo;
