import React from "react";
import { Button } from "react-bootstrap";
import { Plus, Delete, Edit } from "react-feather";

const MainScreen = () => {
  return (
    <div className="mainContainer">
      <div className="mainHeader">
        <div style={{ fontSize: 30 }}>SCHOOL</div>
        <Button style={{backgroundColor:"#77BEBB"}}>Add Task</Button>
      </div>

      <div className="tasks">
        <div>Tasks</div>

        <div className="taskDiv">
          <div style={{ flex: 9 }}>
            <p>dkjddl</p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <Delete />
            </div>
            <div style={{ flex: 1 }}>
              <Edit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
