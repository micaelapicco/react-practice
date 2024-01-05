import { useState } from "react";
function TodoCreate({ onCreate }) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length > 0) {
      onCreate(text);
    }
    setText("");
  };

  return (
    <div>
      <h3>Add Todo</h3>
      <form onSubmit={handleSubmit}>
        <label>Description</label>
        <input value={text} onChange={handleChange} placeholder="todo..." />
        <button>Add!</button>
      </form>
    </div>
  );
}

export default TodoCreate;
