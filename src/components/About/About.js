import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PageHero from "../PageHero/PageHero";


const About = () => {
    return (
        <div>
            <PageHero>About Courses</PageHero>
            <Container className="py-5">
                <Row className="gap-5">
                    <Col><h2>Learn with Us!</h2>
                    <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eos officia officiis voluptatum sit eius quia distinctio facilis dignissimos exercitationem, illum, harum perferendis adipisci vel fugiat cupiditate fuga necessitatibus similique.</p>
                    
                        <p>
                    Aenan quia distinctio facilis dignissimos exercitationem, illum, harum perferendis adipisci vel fugiat cupiditate fuga necessitatibus similique.
                    </p>
                    <LinkContainer to={'/courses'} className="mt-5">
                    <Button variant="primary">View Our Courses</Button>
                    </LinkContainer>
                    </Col>
                    <Col><img src="/images/learn.png" alt="" /></Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default About;
