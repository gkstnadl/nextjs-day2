import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { TodoType, TodoListType } from "@/types";

const queryKey = ["todoList"];

const useTodoQuery = () => {
  const queryClient = useQueryClient();
  const {
    data: todoList,
    isLoading,
    isError,
  } = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/todoList/");
      const { todoList }: TodoListType = await response.json();
      return todoList;
    },
    retry: 0,
    refetchOnWindowFocus: false,
  });

  const mutationOptions = {
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
    onError: (error: Error) => console.log(error),
  };

  const { mutate: updateMutate } = useMutation({
    mutationFn: async ({ id, isDone }: { id: string; isDone: boolean }) => {
      await fetch(`http://localhost:3000/api/todoList/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: !isDone }),
      });
    },
    ...mutationOptions,
  });

  const { mutate: deleteMutate } = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:3000/api/todoList/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    ...mutationOptions,
  });
  return { todoList, isLoading, isError, updateMutate, deleteMutate };
};

export default useTodoQuery;
