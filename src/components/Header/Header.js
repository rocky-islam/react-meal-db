import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/friend'>Friends</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    );
};

export default Header;