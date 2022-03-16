import React, { useEffect } from "react";

const ViewDescriptionModal = (props) => {
  useEffect(() => {
    console.log('props: ', props.task.name);

    return () => {
      console.log("");
    };
  }, [props]);

  if (!props.show) {
    return null;
  }

  return (
    <div className="modalBackground">
      <div className="descModalContainer">
        <div className="title">
          <h4 style={{fontWeight:"bold", display:"flex", justifyContent:"center"}}>{props.task.name}</h4>
        </div>

        <div className="modalBody">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <div style={{ fontWeight: "bold", fontSize: 20 }}></div> */}
            <div>{props.task.description}</div>
          </div>
        </div>

        <div className="footer">
          {/* <button className="todo-button" type="submit" >Edit</button> */}
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ViewDescriptionModal;
