import React from 'react';
import { Button } from 'react-bootstrap';


const DeleteTask = props => {
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
                  <div style={{display:"flex", flexDirection:"column"}}>
                      <label style={{marginBottom:20}}>Enter task:</label>
                      <input type='text' placeholder='Enter task' />

                  </div>
                </div>
                
                <div className='footer'>
                <Button onClick={props.onClose} style={{backgroundColor:"#77BEBB"}}>Close</Button>
                </div>
            </div>
            
        </div>

       
    )
}

export default DeleteTask;
