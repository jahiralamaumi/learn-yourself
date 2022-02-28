import React, { Component } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Course = (props) => {
    const { title, image, description, price } = props.course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description.slice(0, 45)}</Card.Text>
                    <Badge pill bg="dark" className="mb-3">
                        {price}
                    </Badge>
                    <br />
                    <LinkContainer to={'/contact'}>
                    <Button variant="secondary">Enroll Now</Button>
                    </LinkContainer>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;
