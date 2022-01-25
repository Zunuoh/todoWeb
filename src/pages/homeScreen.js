import React from 'react';
import SideCollection from './sideCollection';
import MainScreen from './mainScreen';
// import Signup from '../auth/signup';
import { Col, Row } from 'react-bootstrap';

const HomeScreen = () => {
    return (

        // <Signup/>
        <div>
                <Row >
                <Col>
                    <SideCollection/>
                </Col>
                <Col xs={10} >
                    <MainScreen/>
                </Col>
                </Row>
          
        </div>
    )
}

export default HomeScreen;

