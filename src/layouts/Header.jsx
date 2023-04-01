import React from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="logo">
          <Link className="nav-link" to="/">
            Dev Manager
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink className="nav-link" to="/contacts">
              Contacts
            </NavLink>
            <NavLink className="nav-link" to="/add-contact">
              Add Contact
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Registration
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 shadow-none"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
