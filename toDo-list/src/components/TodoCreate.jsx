import { useRef, useState } from "react";

function TodoCreate({ onCreate }) {
  const [text, setText] = useState("");
  const [isModalMode, setModalMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const dialogRef = useRef();

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

  const handleShowModal = () => {
    if (showModal) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        onClick={() =>
          setModalMode((prevState) => {
            if (prevState === false && showModal === true) {
              setShowModal(false);
            }
            return !prevState;
          })
        }
      >
        {isModalMode ? <p>Input mode</p> : <p>Modal mode</p>}
      </button>
      {isModalMode ? (
        <>
          <button onClick={handleShowModal}>Add todo</button>
          <dialog ref={dialogRef}>
            <form onSubmit={handleSubmit} method="dialog">
              <label>Add todo</label>
              <input value={text} onChange={handleChange} />
              <button className="add">+</button>
            </form>
          </dialog>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Add todo</label>
          <input value={text} onChange={handleChange} />
          <button className="add">+</button>
        </form>
      )}
    </>
  );
}

export default TodoCreate;
