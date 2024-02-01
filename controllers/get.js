import todos from "../data/todos.json" assert { type: "json" };

const getTodos = async (context) => {
  try {
    context.response.status = 200;
    context.response.body = { status: "success", todos };
  } catch (error) {
    context.response.status = 500;
    context.response.body = { status: "failed", todos: [] };
  }
};

export default getTodos;
