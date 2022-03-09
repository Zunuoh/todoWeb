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
      <div className="modalContainer">
        <div className="title">
          <h4 className="modal-title">VIEW DESCRIPTION</h4>
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
            <div style={{ fontWeight: "bold", fontSize: 20 }}>kdd</div>
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
