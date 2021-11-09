import React from 'react';
import img from '../error/error.png';
import './error.css';

const Error = () => {
    return (
        <>
        <img src = {img} alt = 'error'></img>
        <span>'Somthing goes wrong...'</span>
        </>
    )
}
export default Error;