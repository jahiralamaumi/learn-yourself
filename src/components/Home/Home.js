import React, { Component, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Course from "../Course/Course";
import PageHero from "../PageHero/PageHero";

const Home = (props) => {
    console.log(props);
    const { courses } = props;
    console.log(courses);

    return (
        <div>
            <PageHero>Welcome!</PageHero>
            <Container className="p-5">
                
            <h2 className="text-center mb-5 fw-bold text-secondary">Featured Courses</h2>
            <Row xs={1} md={2} className="g-5">
                {courses
                    .map((course) => (
                        <Course key={course.id} course={course}></Course>
                    ))
                    .slice(0, 4)}
            </Row>
            
            <div className="d-grid gap-2 col-3 mx-auto mt-5">
            <LinkContainer to={"/courses"}>
                <Button variant="dark" className="btn-lg">
                    View All Courses
                </Button>
            </LinkContainer>
            </div>
        </Container>
        </div>
    );
};

export default Home;
