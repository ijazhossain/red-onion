import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
export const CartContext = createContext(null)
const CartProvider = ({ children }) => {
    const foodCart = useCart()
    return (
        <CartContext.Provider value={foodCart}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;