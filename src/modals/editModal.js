import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid'

const EditModal = (props) => {
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
            <form className="todo-form">
              <label
                style={{ fontSize: 20, fontWeight: "bold", color: "#3A2E39" }}
              >
                Enter task:
              </label>
              <input
                type="text"
                placeholder="Enter task"
                className="todo-taskName"
                name="name"
             
              
              />
            </form>
          </div>
        </div>

        <div className="footer">
          <button className="todo-button" type="submit" >Add</button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
