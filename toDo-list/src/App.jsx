import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  const [todos, setTodos] = useState([]);
  const handleCreate = (text) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Math.round(Math.random() * 999999),
        state: false,
        text,
      },
    ]);
  };

  const handleEdit = (id, newText) => {
    setTodos((prevState) => {
      const updateTodoIdx = prevState.findIndex((todo) => todo.id === id);

      return [
        ...prevState.slice(0, updateTodoIdx),
        {
          ...prevState[updateTodoIdx],
          text: newText,
        },
        ...prevState.slice(updateTodoIdx + 1),
      ];
    });
  };

  const handleDelete = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };
  return (
    <>
      <div>
        <TodoCreate onCreate={handleCreate}></TodoCreate>
        <button onClick={handleDeleteAll}>Delete all</button>
        <TodoList
          todos={todos}
          onCreate={handleCreate}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default App;
