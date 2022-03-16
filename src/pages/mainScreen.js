import React, { useState, useContext, useEffect } from "react";
import AddTask from "../modals/addTaskModal";
import { GlobalContext } from "../context/GlobalState";
import TodoStates from "./todoStates";
import { Button } from "react-bootstrap";

const MainScreen = () => {
  const [showAddModal, setshowAddModal] = useState(false);
  const { tasks } = useContext(GlobalContext);

  useEffect(() => {
    console.log(tasks);

    return () => {
      console.log("");
    };
  });

  return (
    <div style={{ marginBottom: 30, paddingLeft: 170 }}>
      <div className="mainContainer">
        <div
          style={{
            fontSize: 30,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            fontWeight: "bold",
            color: "#3A2E39",
          }}
        >
          TASKIFY
        </div>
        <div className="mainHeader">
          <div style={{ fontSize: 30 }}></div>
          <div>
            <Button
              style={{
                backgroundColor: "#BD33A4",
                fontFamily: "Montserrat, sans-serif",
                borderColor: "#BD33A4",
              }}
              onClick={() => setshowAddModal(true)}
            >
              Add Task
            </Button>
            <AddTask
              show={showAddModal}
              onClose={() => setshowAddModal(false)}
            />
          </div>
        </div>

        <div className="todos">
          <div>
            <h5 style={{ fontFamily: "Montserrat, sans-serif" }}>
              hey there, you can add your tasks
            </h5>
          </div>
          <div style={{ fontSize: 25, marginBottom: 20 }}>Todos:</div>
          {/* {() ? () : ()} */}
          {/* <div>OOPS....you have no tasks yet</div> */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 50,
              flexWrap: "wrap",
              marginTop: 20,
            }}
          >
            {tasks.map((task) => {
              return <TodoStates task={task} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
