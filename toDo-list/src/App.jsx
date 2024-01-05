import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  const [todos, setTodos] = useState(() => {
    const todoWindow = window.localStorage.getItem("todos");

    if (todoWindow !== null) {
      return JSON.parse(todoWindow);
    }
    return [];
  });
  const handleCreate = (text) => {
    setTodos((prevState) => {
      const newTodos = [
        ...prevState,
        {
          id: Math.round(Math.random() * 999999),
          state: false,
          text,
        },
      ];
      window.localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const handleEdit = (id, newText) => {
    setTodos((prevState) => {
      const updateTodoIdx = prevState.findIndex((todo) => todo.id === id);

      const updatedTodos = [
        ...prevState.slice(0, updateTodoIdx),
        {
          ...prevState[updateTodoIdx],
          text: newText,
        },
        ...prevState.slice(updateTodoIdx + 1),
      ];
      window.localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const handleDelete = (id) => {
    setTodos((prevState) => {
      const deleteTodo = prevState.filter((todo) => todo.id !== id);
      window.localStorage.setItem("todos", JSON.stringify(deleteTodo));
      return deleteTodo;
    });
  };

  const handleDeleteAll = () => {
    setTodos([]);
    window.localStorage.removeItem("todos");
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
