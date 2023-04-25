import React from 'react';
import Header from '../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Restaurant from '../Restaurant/Restaurant';
import Navigation from '../Shared/Navigation/Navigation';
import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container>
            <Header></Header>
            <Banner></Banner>
            <Navigation></Navigation>
            <Restaurant></Restaurant>
        </Container>
    );
};

export default Home;