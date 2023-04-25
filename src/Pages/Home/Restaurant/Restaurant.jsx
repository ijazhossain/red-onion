import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Launch from '../Launch/Launch';
import Dinner from '../Dinner/Dinner';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

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
        <>
            <nav className='mb-5 py-5'>
                <ul className='d-flex align-items-center justify-content-center'>
                    <Link className='text-decoration-none me-4 text-black fw-bold' onClick={handleBreakfast} >Breakfast</Link>
                    <Link className='text-decoration-none me-4 text-black fw-bold' onClick={handleLaunch} >Launch</Link>
                    <Link className='text-decoration-none me-4 text-black fw-bold' onClick={handleDinner}>Dinner</Link>
                </ul>
            </nav>
            <Row className='g-5 w-75 mx-auto'>
                {breakfast && foods.slice(0, 6).map(food => <Breakfast
                    key={food.id}
                    food={food}
                ></Breakfast>)}
            </Row>
            <Row className='g-5 w-75 mx-auto'>
                {launch && foods.slice(6, 12).map(food => <Launch
                    key={food.id}
                    food={food}
                ></Launch>)}
            </Row>
            <Row className='g-5 w-75 mx-auto'>
                {dinner && foods.slice(12, 18).map(food => <Dinner
                    key={food.id}
                    food={food}
                ></Dinner>)}
            </Row>
        </>
    );
};

export default Restaurant;