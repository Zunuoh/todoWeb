import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
// import {useNavigate} from 'react-router-dom';
// import {v4 as uuid} from 'uuid'

const EditModal = (props) => {
  const { editTask } = useContext(GlobalContext);
  const [taskName, setTaskName] = useState(props.task.name);
  const [taskDesc, setTaskDesc] = useState(props.task.description);

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };
  const handleDescChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = () => {
    editTask({
      id: props.task.id,
      name: taskName,
      description: taskDesc,
    });
    // setTaskName('');
    props.onClose();
    return;
  };

  if (!props.show) {
    return null;
  }
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h4 className="modal-title">EDIT TASK</h4>
        </div>

        <div className="modalBody">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <form className="todo-form" onSubmit={handleSubmit}>
              <label style={{ fontSize: 20, color: "#3A2E39" }}>Task:</label>
              <input
                type="text"
                placeholder="Enter task"
                className="todo-taskName"
                defaultValue={props.task.name}
                // name="name"
                // value={selectedUser.name}
                onChange={handleNameChange}
              />

              <label
                style={{
                  fontSize: 20,
                  color: "#3A2E39",
                  fontFamily: "Montserrat, sans-serif",
                  marginTop: 30,
                }}
              >
                Description:
              </label>
              <textarea
                style={{ height: 70 }}
                className="todo-taskName"
                name="description"
                onChange={handleDescChange}
                defaultValue={props.task.description}
                // onChange={descriptionNameChange}
              />
            </form>
          </div>
        </div>

        <div className="footer">
          <button className="todo-button" type="submit" onClick={handleSubmit}>
            Edit
          </button>
          <button
            onClick={() => {
              // setTaskName('');
              props.onClose();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
