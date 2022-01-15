import React from 'react';
import { Button } from 'react-bootstrap';


const AddTask = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className='modal-container'>
            <div className='modal-content'>

                <div className='modal-header'>
                    <h4 className='modal-title'>ADD TASK</h4>
                </div>

                <div className='modal-body'>
                    BODY
                </div>
                
                <div className='modal-footer'>
                <Button onClick={props.onClose}>Close</Button>
                </div>
            </div>
            
        </div>

       
    )
}

export default AddTask;
