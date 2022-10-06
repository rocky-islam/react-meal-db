import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Frdetails = () => {
    const singleMeal = useLoaderData();
    // console.log(singleMeal);
    const { idMeal, strMeal } = singleMeal.meals[0];
    
    return (
        <div>
            <h1>meal db details: {idMeal}</h1>
            <h1>meal db details: {strMeal}</h1>
        </div>
    );
};

export default Frdetails;