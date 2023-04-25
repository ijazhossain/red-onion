import React from 'react';
import MealCard from '../MealCard/MealCard';


const Breakfast = ({ food }) => {

    return (
        <MealCard food={food}></MealCard>
    );
};

export default Breakfast;