import { TodoType } from "@/types";

const url = "http://localhost:4000/todos";

export const fetchTodo = async () => {
  const res = await fetch(`${url}`);
  const data = await res.json();

  if (!data) {
    return new Response("Todo is not found", {
      status: 404,
    });
  }

  return data;
};

export const addTodo = async (newTodo: TodoType) => {
  await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};

export const deleteTodo = async (id: string) => {
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};
