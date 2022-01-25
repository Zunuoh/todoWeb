import React from 'react';



const AddTaskModal = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>

                <div className='title'>
                    <h4 className='modal-title'>ADD TASK</h4>
                </div>

                <div className='modalBody'>
                  <div style={{display:"flex", flexDirection:"column"}}>
                      <form className='todo-form'>
                      <label style={{fontSize:20, fontWeight:"bold", color:"#3A2E39"}}>Enter task:</label>
                      <input type='text' placeholder='Enter task' 
                      className='todo-taskName' name="task"/>
                      </form>
                  </div>
                </div>
                
                <div className='footer'>
                <button className='todo-button'>Add</button>
                <button onClick={props.onClose} >Close</button>
                </div>
            </div>
            
        </div>

       
    )
}

export default AddTaskModal;
