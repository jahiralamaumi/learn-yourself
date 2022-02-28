import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const PageHero = (props) => {
    return (  
        <Container className="bg-dark pt-5 pb-5" fluid>
            <Row>
                <Col>
                <h1 className="display-1 text-center text-white">{props.children}</h1>
                </Col>
            </Row>
        </Container>
    );
}
 
export default PageHero;