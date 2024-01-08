import './styles/TodoItem.css'
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
    <div className='todo-item'>
      {!showTodo ? (
        <div className='buttons'>
          <button className="edit" onClick={() => setShowTodo(!showTodo)}>
            <EditIcon/>
          </button>
          <button className="delete" onClick={() => onDelete(todo.id)}>
            <DeleteTodoIcon />
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
