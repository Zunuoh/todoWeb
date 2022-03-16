import React, {useState, useContext} from 'react'
import EditModal from "../modals/editModal";
import ViewDescriptionModal from "../modals/viewDescriptionModal";
import { Trash, Edit, Eye } from "react-feather";
import {OverlayTrigger, Tooltip} from "react-bootstrap"
import DeleteTask from "../modals/deleteModal";
import { GlobalContext } from "../context/GlobalState";

const TodoStates = (props) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewDescriptionModal, setViewDescriptionModal] = useState(false);
    const { deleteTask } = useContext(GlobalContext);
  
  return (
        <>
          <div className="taskDiv" key={props.task.id}>
            <div style={{ flex: 9, display: "flex", marginTop: 20 }}>
              <div className="taskTitle">
                <p>{props.task.name}</p>
              </div>

              {/* <p>{props.task.description}</p> */}
            </div>
            <div
              style={{ flex: 1, display: "flex", flexDirection: "row" }}
            >
              <div
                style={{ flex: 1, marginRight:4}}
                onClick={() => setViewDescriptionModal(true)}
              >
                 <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="button-tooltip-2">View</Tooltip>}
              >
                 <Eye color="#BD33A4" />
              </OverlayTrigger>
              </div>

              <div
                style={{ flex: 1 }}
                onClick={() => setShowEditModal(true)}
              >
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Edit</Tooltip>}>
                <Edit color="#BD33A4" />
                </OverlayTrigger>
              </div>

              <div
                style={{ flex: 1,marginLeft:2 }}
                // onClick={() => {
                //   setShowDeleteModal(true);
                // }}
              >
                 <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Delete</Tooltip>}>
                 <Trash
                  color="#BD33A4"
                  onClick={() => deleteTask(props.task.id)}
                />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          {showEditModal && <EditModal
            show={showEditModal}
            onClose={() => setShowEditModal(false)}
            task={props.task}
          />}
          <DeleteTask
            show={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
          />
          <ViewDescriptionModal
            show={showViewDescriptionModal}
            onClose={() => setViewDescriptionModal(false)}
            task={props.task}
          />
        </>

  )
}

export default TodoStates