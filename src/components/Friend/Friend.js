import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {
    // console.log(friend);
    const { idMeal, strMeal, strInstructions, strMealThumb, strYoutube } =
      friend;
    
    return (
        <div>
            <div className='card'>
                <img src={strMealThumb} alt="" />
                
                <h4>Name: {strMeal}</h4>
                <p>{strInstructions}</p>
                <button><Link to={`/frdetails/${idMeal}`}>Show details</Link></button>
            </div>
        </div>
    );
};

export default Friend;