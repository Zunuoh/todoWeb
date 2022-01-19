import React, { useState } from "react";
import AddTask from "../modals/addTask";
import DeleteTask from "../modals/deleteModal";
import { Button } from "react-bootstrap";
import { Trash, Edit } from "react-feather";
 

const taskList = [{"id":"0", "name":"Register courses"}, {"id":"1", "name":"Psychology class at 5pm"}, {"id":"2", "name":"Serminar"}]

const MainScreen = () => {
    const[tasks] = useState(taskList);
    const[showAddModal, setshowAddModal] = useState(false);
    const[showDeleteModal, setShowDeleteModal] = useState(false);

 
  return (
    <div className="mainContainer">
      <div className="mainHeader">
        <div style={{ fontSize: 30 }}>SCHOOL</div>
        <div>
        <Button style={{backgroundColor:"#77BEBB"}} onClick={() => setshowAddModal(true)}>Add Task</Button>
        <AddTask show={showAddModal} onClose={()=>setshowAddModal(false)}/>
        </div>
      
      </div>

      <div className="tasks">
        <div style={{fontSize:25}}>Tasks:</div>

        {tasks && tasks.map(task =>{
            return(
         <div className="taskDiv">
          <div style={{ flex: 9, display:"flex" }}>
            <p>{task.name}</p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <Edit />
            </div>
            <div style={{ flex: 1 }} onClick={()=>{setShowDeleteModal(true)}} >
              <Trash />
              <DeleteTask show={showDeleteModal} onClose={()=>{setShowDeleteModal(false)}}/>
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
