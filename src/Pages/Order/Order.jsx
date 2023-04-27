import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCart } from '../../utilities/fakedb';

const Order = () => {
    const foods = useLoaderData()
    console.log(foods);
    const [cart, setCart] = useState([])
    useEffect(() => {
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

    }, [foods])
    return (
        <div>

            <h1>This is order {cart.length}</h1>
        </div>
    );
};

export default Order;