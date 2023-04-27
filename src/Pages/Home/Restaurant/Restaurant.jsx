import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Launch from '../Launch/Launch';
import Dinner from '../Dinner/Dinner';

import { Nav, Navbar, Row } from 'react-bootstrap';
import './Restaurant.css'

const Restaurant = () => {
    const [foods, setFoods] = useState([])
    const [breakfast, setBreakfast] = useState(true);
    const [launch, setLaunch] = useState(false);
    const [dinner, setDinner] = useState(false);


    const handleBreakfast = () => {
        setBreakfast(true)
        setLaunch(false)
        setDinner(false)
    }
    const handleLaunch = () => {
        setBreakfast(false)
        setLaunch(true)
        setDinner(false)
    }
    const handleDinner = () => {
        setBreakfast(false)
        setLaunch(false)
        setDinner(true)
    }

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div>

            <Navbar className='py-5' bg="white" variant="light">

                <Nav className='mx-auto'>
                    <Nav.Link className=' active-link text-decoration-none me-4 text-black fw-bold' onClick={handleBreakfast} >Breakfast</Nav.Link>
                    <Nav.Link className=' active-link text-decoration-none me-4 text-black fw-bold' onClick={handleLaunch} >Launch</Nav.Link>
                    <Nav.Link className=' active-link text-decoration-none me-4 text-black fw-bold' onClick={handleDinner}>Dinner</Nav.Link>
                </Nav>

            </Navbar>

            <div className=''>
                <Row className=' w-75 mx-auto'>
                    {breakfast && foods.slice(0, 6).map(food => <Breakfast
                        key={food.id}
                        food={food}
                    ></Breakfast>)}
                </Row>

                <Row className=' w-75 mx-auto'>
                    {launch && foods.slice(6, 12).map(food => <Launch
                        key={food.id}
                        food={food}
                    ></Launch>)}
                </Row>

                <Row className=' w-75 mx-auto'>
                    {dinner && foods.slice(12, 18).map(food => <Dinner
                        key={food.id}
                        food={food}
                    ></Dinner>)}
                </Row>
            </div>
        </div>
    );
};

export default Restaurant;