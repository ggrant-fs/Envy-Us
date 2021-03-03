import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <React.Fragment>
            <div>
                <header className='header-container'>
                    <h1>Envy Us</h1>
                </header>
            </div>
            <hr />
            <div className='nav-container'>
                <nav>
                    <ul>
                        <Link to='/' id='li-1' style={{ textDecoration: 'none' }}><li> Home |</li></Link>
                        <Link to='/about' id='li-2' style={{ textDecoration: 'none' }}><li>About |</li></Link>
                        <Link to='' id='li-3' style={{ textDecoration: 'none' }}><li>Mens |</li></Link>
                        <Link to='' id='li-4' style={{ textDecoration: 'none' }}><li>Womens </li></Link>
                    </ul>
                </nav>
            </div>
            <hr />
        </React.Fragment>
    );
};

export default Nav;