"use client";

import { TodoListType, TodoType } from "@/types";
import useTodoQuery from "@/hooks/useTodoQuery";

const TodoList = ({
  todoList,
  isDone,
}: {
  todoList: TodoType[] | undefined;
  isDone: boolean;
}) => {
  const { updateMutate, deleteMutate } = useTodoQuery();
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default TodoList;
