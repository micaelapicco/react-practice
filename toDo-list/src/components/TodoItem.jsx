import "./styles/TodoItem.css";
import { useState } from "react";
import { DeleteTodoIcon, EditIcon } from "./Icons";

function TodoItem({ todo, onEdit, onDelete }) {
  const [input, setInput] = useState(todo.text);
  const [showTodo, setShowTodo] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(todo.id, input);
    setShowTodo(false);
  };
  return (
    <article className="todo-item">
      {!showTodo ? (
        <>
          <p>{todo.text}</p>
          <div className="buttons">
            <button className="edit" onClick={() => setShowTodo(!showTodo)}>
              <EditIcon />
            </button>
            <button className="delete" onClick={() => onDelete(todo.id)}>
              <DeleteTodoIcon />
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
      )}
    </article>
  );
}

export default TodoItem;
