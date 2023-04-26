import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


const MenuLayout = () => {
    return (
        <Container>

            <Outlet></Outlet>
        </Container>
    );
};

export default MenuLayout;