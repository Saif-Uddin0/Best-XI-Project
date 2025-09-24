import React from 'react';
import navImg from '../../assets/logo.png'
import dolarImg from '../../assets/dollar 1.png'

const Navbar = () => {
    return (
        <div class="navbar max-w-[1200px] mx-auto">
            <div class="flex-1">
                <img className='w-[60px] h-[60px]' src={navImg} alt="" />
            </div>
            <div class="flex items-center space-x-1.5">
                <span>6000000000</span>
                <span>Coin</span>
                <img src={dolarImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;