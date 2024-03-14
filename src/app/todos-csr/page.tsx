import React from "react";
import TodoList from "@/components/TodoList";
import InputForm from "@/components/InputForm";
import useTodoQuery from "@/hooks/useTodoQuery";

const CSR = () => {
  const { todoList, isError, isLoading } = useTodoQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <div>
      <h1>todos-csr Page</h1>
      <InputForm />
      <div>Working🔥</div>
      <TodoList todoList={todoList} isDone={false} />
      <div>Done🎉</div>
      <TodoList todoList={todoList} isDone={true} />
    </div>
  );
};

export default CSR;
