import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from '../../../../assets/images/others/logo2.png'
import { FaShoppingCart } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { getCart } from '../../../../utilities/fakedb';
import useCart from '../../../../hooks/useCart';
import { CartContext } from '../../../../providers/CartProvider';

const Header = () => {
    // const foodCart = useContext(CartContext)
    // console.log(foodCart[0]);
    const foods = useLoaderData()
    const [cart, setCart] = useCart()
    // console.log(cart);
    // console.log(cart.length);
    /*  useEffect(() => {
         const storedCart = getCart()
         // console.log(storedCart);
         const savedCart = []
         for (const id in storedCart) {
             const addedFood = foods.find(food => food.id === id)
             if (addedFood) {
                 // console.log(addedFood);
                 const quantity = storedCart[id];
                 addedFood.quantity = quantity
                 savedCart.push(addedFood)
             } else {
 
             }
         }
         setCart(savedCart)
 
     }, [foods]) */
    return (
        <Navbar className='p-4 ' bg="white" expand="lg">

            <Navbar.Brand as={Link} to="/">
                <img width="170px" src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/order" className='text-black fw-bold'>

                        <div className="border-0  position-relative">
                            <FaShoppingCart className='fs-5 text-dark'></FaShoppingCart>
                            <span className=" position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#link" className='text-black fw-bold mx-2'>Login</Nav.Link>
                    <Button className='signup-btn rounded-4' variant="danger" >Signup</Button>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Header;