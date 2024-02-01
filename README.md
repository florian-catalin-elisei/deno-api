# Deno API

This is a Todo List API built with Deno and Oak framework. It provides CRUD operations for managing a list of todos.

## Installation

Install my-project with npm

Ensure you have Deno installed. You can install Deno by following the instructions on [Deno's official website](https://deno.com/).

1. Clone the repository to your local machine:

```bash
  git clone https://github.com/your-username/deno-api.git
```

2. Navigate to the project directory:

```bash
  cd deno-api
```

3. Run the application:

```bash
  deno run --allow-net --allow-read --allow-write index.js
```

## Routes

#### GET /todos

Retrieve the list of todos.

#### POST /todos

Create a new todo.

#### DELETE /todos/:id

Delete a todo by ID.

#### PUT /todos/:id

Update a todo by ID.
