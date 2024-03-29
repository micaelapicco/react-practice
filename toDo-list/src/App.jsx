import "./main.css";

import { useState } from "react";

import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { DeleteAll } from "./components/Icons";

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
      <header>
        <h1>Todo List</h1>
      </header>

      <main className="app">
        <aside>
          <button className="delete-all" onClick={handleDeleteAll}>
            <DeleteAll />
          </button>
        </aside>
        <section>
          <TodoCreate onCreate={handleCreate}></TodoCreate>
        </section>

        <section className="list">
          <TodoList
            todos={todos}
            onCreate={handleCreate}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}

export default App;
