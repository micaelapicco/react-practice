import TodoItem from "./TodoItem";

function TodoList({ todos, onEdit, onDelete }) {
  const todosToRender = todos.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  return <>{todosToRender}</>;
}

export default TodoList;
