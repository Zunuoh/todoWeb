import React from 'react';



const DeleteTask = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div className='modalBackground'>
        <div className='modalContainer'>

            <div className='title'>
                <h4 className='modal-title'>DELETE TASK</h4>
            </div>

            <div className='modalBody'>
              <div>
                <p style={{color:"#3A2E39", marginTop:30}}>Are you sure you want to delete this task?</p>  
              </div>
            </div>
            
            <div className='footer'>
            <button className='todo-button'>Yes</button>
            <button onClick={props.onClose} >Cancel</button>
            </div>
        </div>
        
    </div>

       
    )
}

export default DeleteTask;
