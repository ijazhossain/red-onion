import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCart } from '../../utilities/fakedb';
import { Col, Container, Row } from 'react-bootstrap';
import './Order.css'
import CartItem from '../CartItem/CartItem';
import useCart from '../../hooks/useCart';
import Header from '../Home/Shared/Header/Header';

const Order = () => {
    const foods = useLoaderData()
    // console.log(foods);
    const [cart, setCart] = useCart()
    /* useEffect(() => {
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
        <Container className=''>
            <Header></Header>
            <Row className='mt-5 '>
                <Col lg={8}>
                    <h2 className='form-title w-75 pb-4'>Edit Delivery Details</h2>

                    <form className='mt-5'>
                        <input className='d-block p-3 rounded-3  w-75 my-3 border-0' type="text" name="name" id="name" placeholder='Deliver to door' />
                        <input className='d-block p-3 rounded-3  w-75 my-3 border-0' type="text" name="address" id="address" placeholder="107 Rd No 8" />
                        <input className='d-block p-3 rounded-3  w-75 my-3 border-0' type="text" name="flat" id="flat" placeholder='Flat, suite or floor' />
                        <input className='d-block p-3 rounded-3  w-75 my-3 border-0' type="text" name="businessName" id="business-name" placeholder='Business Name' />
                        <textarea name="instruction" id="instruction" className='d-block p-3 rounded-3  w-75 my-3 border-0' cols="30" rows="5" placeholder='Add delivery instruction'></textarea>
                        <input className='w-75 border-0 py-2 rounded-3' type="submit" value="Save & Continue" />
                    </form>
                </Col>
                <Col lg={4}>
                    <p>From Gulsan Plaza Restaura GPR</p>
                    <p>Ariving In 20-30 min</p>
                    <p>107 Rd No 8</p>
                    {
                        cart.map(cartItem => <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                        ></CartItem>)
                    }
                </Col>
            </Row>


        </Container>
    );
};

export default Order;