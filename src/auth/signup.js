import React from 'react';

const SignUp = () => {
  return(
      <div>
        <h1 style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"5%"}}>Hey there! We are glad you are here</h1>
        <h1 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Kindly fill this form to sign up</h1>
      <div className='signupContainer'>
      
      <form id='personalForm' className='signupForms'>
          <h5 className='signupHeaders'>PERSONAL</h5>
          <input placeholder='Firstname' type='text' className='signupInput'/>
          <input placeholder='Firstname' type='text' className='signupInput'/>
          <input placeholder='Firstname' type='text' className='signupInput'/>
          <div className='btnBox'>
            <button type='button' id='Next1' className='formButton'>Next</button>
          </div>
      </form>

      <form id='accountForm' className='signupForms'>
          <h5 className='signupHeaders'>CREATE ACCOUNT</h5>
          <input placeholder='Firstname' type='text' className='signupInput'/>
          <input placeholder='Firstname' type='text' className='signupInput'/>
          <input placeholder='Firstname' type='text' className='signupInput'/>
          <div className='btnBox'>
            <button type='button' id='Back1' className='formButton'>Back</button>
            <button type='button' id='Submit' className='formButton'>Submit</button>    
          </div>
      </form>

      <div className='stepRow'>
        <div id='progress'></div>
        <div className='stepCol'><small>Step 1</small></div>
        <div className='stepCol'><small>Step 2</small></div>
      </div>
      </div>
      </div>
     






  )
};

export default SignUp;
