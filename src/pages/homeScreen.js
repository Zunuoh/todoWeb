import React from 'react';
import SideCollection from './sideCollection';
import MainScreen from './mainScreen';
import { Button, Col, Container, Row } from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <div>
                <Row>
                <Col>
                    <SideCollection/>
                </Col>
                <Col xs={10}>
                    <MainScreen/>
                </Col>
                </Row>
          
        </div>
    )
}

export default HomeScreen;

