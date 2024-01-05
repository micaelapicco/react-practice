import { useState } from "react";
import EditIcon from "./EditIcon";

function TodoItem({ todo, onEdit, onDelete }) {
  const [input, setInput] = useState(todo.text);
  const [showTodo, setShowTodo] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(todo.id, input);
    setShowTodo(false);
  };
  return (
    <div>
      {!showTodo ? (
        <div>
          <button className="edit" onClick={() => setShowTodo(!showTodo)}>
            <EditIcon/>
          </button>
          <button className="delete" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
          <h4>{todo.text}</h4>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
        </form>
      )}
    </div>
  );
}

export default TodoItem;
