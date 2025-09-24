import React from 'react';
import navImg from '../../assets/logo.png'
import dolarImg from '../../assets/dollar 1.png'

const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
            <div className="flex-1">
                <img className='w-[60px] h-[60px]' src={navImg} alt="" />
            </div>
            <div className="flex items-center space-x-1.5">
                <span>{availableBalance}</span>
                <span>Coin</span>
                <img src={dolarImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;