import React from 'react';
import loader from './loader.png'
import './loader.css'

const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader} alt="loader"/>
        </div>
    );
};

export default Loader;