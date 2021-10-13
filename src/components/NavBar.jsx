import React from 'react'
import { Container,Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

function NavBar({ title, comprar, vender }) {
    return (
        <Navbar bg="black" expand="lg">
            <Container fluid>
                <Navbar.Brand className="text-light" href="#">{title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className="bg-danger opacity-75" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 ms-xl-5 ps-xl-5"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="text-light" href="#action1"><i class="bi bi-bag"></i>{comprar}</Nav.Link>
                        <Nav.Link className="text-light" href="#action2">{vender}</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end me-xl-5" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link className="text-light" href="/home">Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-light" eventKey="link-1">Register</Nav.Link>
                        </Nav.Item>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
