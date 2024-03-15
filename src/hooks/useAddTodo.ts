// useAddTodo.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddTodo = () => {
  const queryClient = useQueryClient();
  const { mutate: addMutate } = useMutation({
    mutationFn: async (newTodo: { title: string; contents: string }) => {
      await fetch("http://localhost:3000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todoList"],
      });
    },
  });

  return addMutate;
};
