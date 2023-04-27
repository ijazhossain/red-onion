import React from 'react';
import { Outlet } from 'react-router-dom';

const OrderLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default OrderLayout;