import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from '../../../../assets/images/others/logo2.png'
import { FaShoppingCart } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className='p-4 ' bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img width="170px" src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className='text-black fw-bold'>
                            <FaShoppingCart></FaShoppingCart>
                        </Nav.Link>
                        <Nav.Link href="#link" className='text-black fw-bold mx-3'>Login</Nav.Link>
                        <Button className='signup-btn rounded-4' variant="danger" >Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;