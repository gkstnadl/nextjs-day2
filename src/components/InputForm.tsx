"use client";

import React from "react";
import useInputForm from "@/hooks/useInputForm";

const InputForm = () => {
  const { title, onTitleChange, contents, onContentsChange, onSubmitHandler } =
    useInputForm();

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="제목을 입력해주세요"
      />
      <input
        type="text"
        value={contents}
        onChange={onContentsChange}
        placeholder="내용을 입력해주세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default InputForm;
