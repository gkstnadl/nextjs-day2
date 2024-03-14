import React from "react";
import Link from "next/link";
import { TodoType } from "@/types";
import InputForm from "@/components/InputForm";

const page = async () => {
  const res = await fetch("http://localhost:4000/todos", {
    cache: "no-cache",
  });
  const todolist: TodoType[] = await res.json();

  return (
    <div>
      <h1>TodoList</h1>
      <InputForm />
      <div>
        <h2>Working🔥</h2>
        {todolist
          .filter((item) => {
            return item.isDone === false;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <Link href={`/todos-ssr/${item.id}`}>
                  <h3>{item.title}</h3>
                  <p>{item.contents}</p>
                </Link>
                <button>삭제하기</button>
                <button>{item.isDone ? "취소하기" : "완료하기"}</button>
              </div>
            );
          })}
      </div>
      <div>
        <h2>Done🎉</h2>
        {todolist
          .filter((item) => {
            return item.isDone === true;
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <Link href={`/todos-ssr/${item.id}`}>
                  <h3>{item.title}</h3>
                  <p>{item.contents}</p>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default page;
