import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Restaurant from '../Restaurant/Restaurant';

import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='container-xxl'>
            <Header></Header>
            <Banner></Banner>
            <Restaurant></Restaurant>
        </div>
    );
};

export default Home;