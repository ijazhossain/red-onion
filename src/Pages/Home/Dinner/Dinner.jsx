import React from 'react';
import MealCard from '../MealCard/MealCard';

const Dinner = ({ food }) => {
    return (
        <MealCard food={food}></MealCard>
    );
};

export default Dinner;