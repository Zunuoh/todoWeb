import React, { useState, useContext } from "react";
import AddTask from "../modals/addTaskModal";
import DeleteTask from "../modals/deleteModal";
import Signout from "../auth/signout";
import { Button } from "react-bootstrap";
import { Trash, Edit, User } from "react-feather";
import { GlobalContext } from "../context/GlobalState";
import EditModal from "../modals/editModal";

// const taskList = [
//   { id: "0", name: "Register courses" },
//   { id: "1", name: "Psychology class at 5pm" },
//   { id: "2", name: "Serminar" },
// ];

const MainScreen = () => {
  // const [todos, setTodos] = useState(taskList);
  const [showAddModal, setshowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const { users, deleteUser } = useContext(GlobalContext);
  
  return (
    <div style={{marginBottom:30}}>
       <div className="logOut" onClick={() => setShowLogoutModal(true)}>
          <User/>
          <p style={{color:"#3A2E39", marginLeft:5 }}>
            SIGN OUT
          </p>
      </div>
      <Signout show={showLogoutModal} onClose={() => setShowLogoutModal(false)}/>
    <div className="mainContainer">
    <div style={{ fontSize: 30, justifyContent:"center", alignItems:"center", display:"flex", fontWeight:"bold", color:"#3A2E39" }}>TASKIFY</div>
      <div className="mainHeader">
        <div style={{ fontSize: 30 }}></div>
        <div>
          <Button
            style={{ backgroundColor: "#BD33A4" }}
            onClick={() => setshowAddModal(true)}
          >
            Add Task
          </Button>
          <AddTask show={showAddModal} onClose={() => setshowAddModal(false)}/>
        </div>
      </div>

      <div className="todos">
      <div>
          <h5>hey there, you can add  your tasks</h5>
        </div>
        <div style={{ fontSize: 25 }}>Todos:</div>
                        {users.map(user =>{
                  return(
                    <div className="taskDiv">
              
                    <div style={{ flex: 9, display: "flex" }}>
                      <p>{user.name}</p>
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
                      <div style={{ flex: 1 }}>
                        <Edit color="#BD33A4"/>
                        <EditModal/>
                      </div>
                      <div
                        style={{ flex: 1,  }}
                        // onClick={() => {
                        //   setShowDeleteModal(true);
                        // }}
                      >
                        <Trash color = "#BD33A4" onClick={() => deleteUser(user.id)}/> 
                      </div>
                    </div>
                  </div>
                  )
                 
                })}
              
      </div>
    </div>
    </div>
  );
};

export default MainScreen;
