import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    // console.log(friends.length);
    // console.log(friends.meals);
    
    return (
        <div>
            <h1>Tis is Friend Page:{friends.length}</h1>
            <h2>{}</h2>
            {
                friends?.meals?.map(friend => <Friend
                key={friend.idMeal}
                friend={friend}
                ></Friend>
                )
            }
        </div>
    );
};

export default Friends;