import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Employee Management</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/departments">Departments</Nav.Link>
                    <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;