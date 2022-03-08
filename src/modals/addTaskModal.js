import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid'

const AddTaskModal = (props) => {
  // const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useContext(GlobalContext);
  const navigate = useNavigate(); 

  const taskNameChange = e => {
      setName(e.target.value);
  }

  const descriptionNameChange = e => {
    setDescription(e.target.value);
}

  const handleSubmit = () => {
    const newUser = {
      id:uuid(),
      name: name,
      description: description
    }
    addTask(newUser);
    setName('');
    props.onClose();
    return
  };

  const handleDesc = () => {
    const newDesc = {
      // desc
    }
  }

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
                style={{ fontSize: 20, fontWeight: "bold", color: "#3A2E39", fontFamily: 'Montserrat, sans-serif' }}
              >
                Enter task:
              </label>
              <input
                type="text"
                // placeholder="Enter task"
                className="todo-taskName"
                name="name"
                value={name}
                onChange={taskNameChange}
              />

              <label
                style={{ fontSize: 20, fontWeight: "bold", color: "#3A2E39", fontFamily: 'Montserrat, sans-serif', marginTop:30 }}
              >
                Enter description:
              </label>
              <textarea style={{height:70}}
                className="todo-taskName"
                name="description"
                value={description}
                onChange={descriptionNameChange}
              />
            </form>
          </div>
        </div>

        <div className="footer">
          <button className="todo-button" type="submit" onClick={handleSubmit} style={{fontFamily: 'Montserrat, sans-serif'}}>Add</button>
          <button onClick={props.onClose} style={{fontFamily: 'Montserrat, sans-serif'}}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
