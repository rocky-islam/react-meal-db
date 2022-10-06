import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Frdetails = () => {
    const singleMeal = useLoaderData();
    // console.log(singleMeal);
    const { idMeal, strMeal } = singleMeal.meals[0];
    
    return (
        <div>
            <h1>All Details Here</h1>
            <h5>meal db details: {idMeal}</h5>
            <h3>meal db Name: {strMeal}</h3>
        </div>
    );
};

export default Frdetails;