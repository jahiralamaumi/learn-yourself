import React, { Component } from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to={"/"}>
                    <Navbar.Brand className="fw-bold">🧠 Courses</Navbar.Brand>
                </LinkContainer>
                <Nav className="mr-auto">
                    <LinkContainer to={"/"}>
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/about"}>
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/courses"}>
                        <Nav.Link>Courses</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to={"/contact"}>
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;
