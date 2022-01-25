import React from 'react';
import { Row, Col, Form,Button } from 'react-bootstrap';
import SigninSVG from './SigninSVG';

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
      <h1 style={{color:"#3A2E39", marginTop:60}}>Hi there! Welcome to todo. Kindly sign in to see your tasks</h1>
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
    <Form.Label style={{marginTop:30}}>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Label style={{marginTop:30}}>Don't have an account? Sign up</Form.Label>
  </Form.Group>
  <Button type="submit" style={{marginTop:30, backgroundColor:"#3A2E39"}}>
    Submit
  </Button>
</Form>
    

    </div>
    </div>
    </Col>
  </Row>
  </div>
    );
};

export default SignIn;
