import React from 'react';
import Home from '../Pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Outlet></Outlet>
        </>
    );
};

export default Main;