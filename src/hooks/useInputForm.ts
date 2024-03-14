import React from "react";
import useChangeHandler from "@/hooks/useChangeHandler";
import { useAddTodo } from "@/hooks/useAddTodo";

const useInputForm = () => {
  const {
    value: title,
    onChange: onTitleChange,
    setValue: setTitle,
  } = useChangeHandler();
  const {
    value: contents,
    onChange: onContentsChange,
    setValue: setContents,
  } = useChangeHandler();
  const addMutate = useAddTodo();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      alert("제목을 입력해주시기 바랍니다.");
      return;
    }
    if (!contents) {
      alert("내용을 입력해주시기 바랍니다.");
      return;
    }
    const newTodo = {
      title,
      contents,
    };
    addMutate(newTodo);
    setTitle("");
    setContents("");
  };

  return {
    title,
    onTitleChange,
    contents,
    onContentsChange,
    onSubmitHandler,
  };
};

export default useInputForm;
