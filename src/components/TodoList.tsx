"use client";

import { TodoType } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const TodoList = () => {
  const queryKey = ["todoList"];
  const queryClient = useQueryClient();

  const {
    data: todoList,
    isError,
    isLoading,
  } = useQuery<TodoType[]>({
    queryKey,
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/todoList/");
      const json = await response.json();
      return json.todoList;
    },
    retry: 0,
    refetchOnWindowFocus: false,
  });

  const mutationOptions = {
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  };

  // const { mutate: addMutate } = useMutation({
  //   mutationFn: async (newTodo: Pick<TodoType, "title" | "contents">) => {
  //     await fetch("http://localhost:3000/api/todoList", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newTodo),
  //     });
  //   },
  //   ...mutationOptions,
  // });

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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <div>
      <section>
        {todoList?.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.contents}</p>
            <div>
              <button
                onClick={() =>
                  updateMutate({ id: item.id, isDone: item.isDone })
                }
              >
                {item.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => deleteMutate(item.id)}>삭제</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TodoList;
