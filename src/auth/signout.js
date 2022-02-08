import React from 'react';
import { Link } from 'react-router-dom';

const Signout = (props) => {
    if (!props.show){
        return null
    }

    // const navigate = useNavigate();

    // const handleSubmit = () =>{
    //   navigate("/signout")
    // }
  return (
    <div className='modalBackground'>
    <div className='modalContainer'>

        <div className='title'>
            <h4 className='modal-title'>SIGN OUT</h4>
        </div>

        <div className='modalBody'>
          <div>
            <p style={{color:"#3A2E39", marginTop:30, display:"flex", alignItems:"center", justifyContent:"center"}}>Are you sure you want to sign out?</p>  
          </div>
        </div>
        
        <div className='footer'>
          <Link to="/">
          <button className='todo-button'>Yes</button>
          </Link>
        <button onClick={props.onClose} >Cancel</button>
        </div>
    </div>
    
</div>

    )
};

export default Signout;
