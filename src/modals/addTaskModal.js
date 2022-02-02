import React, { useState } from "react";

const AddTaskModal = (props) => {
  const [input, setInput] = useState("");

  const handleChange = e => {
      setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDeafult();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };
  if (!props.show) {
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h4 className="modal-title">ADD TASK</h4>
        </div>

        <div className="modalBody">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <form className="todo-form" onSubmit={handleSubmit}>
              <label
                style={{ fontSize: 20, fontWeight: "bold", color: "#3A2E39" }}
              >
                Enter task:
              </label>
              <input
                type="text"
                placeholder="Enter task"
                className="todo-taskName"
                name="task"
                value={input}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>

        <div className="footer">
          <button className="todo-button">Add</button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
