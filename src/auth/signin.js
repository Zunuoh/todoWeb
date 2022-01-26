import React from 'react';
import { Row, Col, Form,Button } from 'react-bootstrap';
import SigninSVG from './SigninSVG';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
  <div>
    <Row>
    <Col className='colContainer'>
      <div className = "svgContainer">
      <SigninSVG/>
      </div>
      
    </Col>


    <Col>
    <div className='signin-container'>
    <div >
      <h1 style={{color:"#3A2E39", marginTop:60}}>Hi there!</h1>
      <h5 style={{color:"#3A2E39", marginTop:10, opacity:0.8, fontWeight: 'normal'}}>Welcome to todo. Kindly sign in to see your tasks.</h5>
    </div>
    <div className='signin-form'>
    <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{marginTop:30}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{marginTop:10}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Link to="/homescreen">
  <Button type="submit" style={{marginTop:30, backgroundColor:"#3A2E39"}}>
    Submit
  </Button>
  </Link>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label style={{display:"flex", justifyContent:"center", alignItemd:"center"}}>Don't have an account? Sign up</Form.Label>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label style={{display:"flex", justifyContent:"center", alignItemd:"center"}}>Forgot Password</Form.Label>
  </Form.Group>
</Form>
    

    </div>
    </div>
    </Col>
  </Row>
  </div>
    );
};

export default SignIn;
