import { useState } from "react";

const useChangeHandler = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    setValue,
    onChange: onChangeHandler,
  };
};

export default useChangeHandler;
