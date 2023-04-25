import React from 'react';
import MealCard from '../MealCard/MealCard';

const Launch = ({ food }) => {
    return (
        <MealCard food={food}></MealCard>
    );
};

export default Launch;