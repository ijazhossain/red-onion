import React from 'react';
import './Banner.css'
import { Button } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className='banner-container d-flex align-items-center justify-content-center flex-column'>
            <h1 className='mb-5'>Best food waiting for your belly</h1>
            <div className='d-flex align-items-center justify-content-center'>
                <input className='rounded-4 px-4' type="search" name="search" id="search" defaultValue='Search food items' />
                <Button className='rounded-4' variant='danger'>Search</Button>
            </div>
        </div>
    );
};

export default Banner;