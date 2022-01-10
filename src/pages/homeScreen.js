import React from 'react';
import SideCollection from './sideCollection';
import MainScreen from './mainScreen';
import { Button, Col, Container, Row } from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <div>
                <Row style={{backgroundColor:"#16171E"}}>
                <Col>
                    <SideCollection/>
                </Col>
                <Col xs={10} style={{backgroundColor:"#16171E"}}>
                    <MainScreen/>
                </Col>
                </Row>
          
        </div>
    )
}

export default HomeScreen;

