export type TodoType = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type AboutType = {
  name: string;
  desctiption: string;
  image: string;
};

export type TodoListType = {
  todoList: TodoType[] | undefined;
  isDone: boolean;
};
