import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Plus, Delete, Edit } from "react-feather";

const taskList = [{"id":"0", "name":"Register courses"}, {"id":"1", "name":"Psychology class at 5pm"}, {"id":"2", "name":"Serminar"}]

const MainScreen = () => {
    const[tasks, setTasks] = useState(taskList);
  return (
    <div className="mainContainer">
      <div className="mainHeader">
        <div style={{ fontSize: 30 }}>SCHOOL</div>
        <Button style={{backgroundColor:"#77BEBB"}}>Add Task</Button>
      </div>

      <div className="tasks">
        <div style={{fontSize:25}}>Tasks:</div>

        {tasks && tasks.map(task =>{
            return(
         <div className="taskDiv">
          <div style={{ flex: 9 }}>
            <p>{task.name}</p>
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

            )
        })}
      </div>
    </div>
  );
};

export default MainScreen;
