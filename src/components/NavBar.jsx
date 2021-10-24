import React from 'react'
import '../style.css';
import {Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav">

            <Link to='/'>
                <button className="navHome"> Home </button>
            </Link>

            <Link to='/form'>
                <button className="navForm"> Form </button>
            </Link> 

            <Link to='/about'>
            <button className="aboutBtn"> About </button>
            </Link>
            
        </div>
    )
}
