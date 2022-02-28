import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Course from "../Course/Course";
import PageHero from "../PageHero/PageHero";

const Courses = (props) => {
    const { courses } = props;
    return (
        <div>
            <PageHero>All Courses</PageHero>
            <Container className="p-5">
                <Row xs={1} md={3} className="g-3">
                    {courses
                        .map((course) => (
                            <Course key={course.id} course={course}></Course>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Courses;
