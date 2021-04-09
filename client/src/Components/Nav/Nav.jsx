import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <React.Fragment>
            <div>
                <header className='header-container'>
                    <h1 id='site-title'>Envy Us</h1>
                </header>
            </div>
            <hr />
            <div className='nav-container'>
                <nav>
                    <ul>
                        <Link to='/' id='li-1' style={{ textDecoration: 'none' }}><li className='nav-li'> Louis Vuitton |</li></Link>
                        <Link to='/about' id='li-2' style={{ textDecoration: 'none' }}><li className='nav-li'>Gucci |</li></Link>
                        <Link to='' id='li-3' style={{ textDecoration: 'none' }}><li className='nav-li'>Dior |</li></Link>
                        <Link to='' id='li-4' style={{ textDecoration: 'none' }}><li className='nav-li'>Vouge |</li></Link>
                        <Link to='' id='li-4' style={{ textDecoration: 'none' }}><li className='nav-li'> Saint Lauren</li></Link>
                        {/* <Link to='' id='li-4' style={{ textDecoration: 'none' }}><li></li></Link> */}
                    </ul>
                </nav>
            </div>
            <hr />
        </React.Fragment>
    );
};

export default Nav;