import { useNavigate } from "react-router-dom";
import { Todo } from "types";
import "styles/components.css";

interface TodoProps {
  todo: Todo;
  toggleTodo: () => void;
  removeTodo: () => void;
}

const TodoItem: React.FC<TodoProps> = ({ todo, toggleTodo, removeTodo }) => {
  const navigate = useNavigate();

  const handleDetailPageLinkClick = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="todoitem">
          <div className="todoitem-header">
            <p className="todoitem-title">{todo.title}</p>
            <p onClick={handleDetailPageLinkClick}>[상세보기]</p>
          </div>
          <div />
          <p>{todo.contents}</p>
          <div />
          <div className="todoitem-btns">
            <button className="btn" onClick={removeTodo}>
              삭제하기
            </button>
            <button className="btn btn-primary" onClick={toggleTodo}>
              {todo.isCompleted ? "취소하기" : "완료하기"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
