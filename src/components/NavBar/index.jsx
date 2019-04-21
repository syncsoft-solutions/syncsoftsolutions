import React, { Component } from 'react'
import './index.css'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class NavBar extends Component {

    searchSite = (evt) => {
        console.log('Test')
    }

    render() {
        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">SyncSoft Solutions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success" onClick={ this.searchSite }>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default NavBar