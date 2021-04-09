import React from 'react';
import { useState, useEffect } from 'react'
import './Footer.css'
const Footer = () => {
    const [newSubscriber, setNewSubscriber] = useState({
        email: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewSubscriber({
            ...newSubscriber,
            [name]: value
        })
    }
    return (
        <React.Fragment>
            <footer>
                <div className='list-container'>
                    <div>
                        <ul className='list'>
                            <li>About Envy Us</li>
                            <li>Careers</li>
                            <li>Advertise</li>
                            <li>Subscriptions</li>
                            <li>Unsubscribe</li>
                            <li>Privacy & Cookies</li>
                            <li>FAQ's</li>

                        </ul>
                    </div>
                    <div className='list'>
                        <ul className='list'>
                            <li>About Envy Us</li>
                            <li>Careers</li>
                            <li>Advertise</li>
                            <li>Subscriptions</li>
                            <li>Unsubscribe</li>
                            <li>Privacy & Cookies</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                    <div className='list'>
                        <ul className='list'>
                            <li>About Envy Us</li>
                            <li>Careers</li>
                            <li>Advertise</li>
                            <li>Subscriptions</li>
                            <li>Unsubscribe</li>
                            <li>Privacy & Cookies</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                    <div className='list'>
                        <ul className='list'>
                            <li>About Envy Us</li>
                            <li>Careers</li>
                            <li>Advertise</li>
                            <li>Subscriptions</li>
                            <li>Unsubscribe</li>
                            <li>Privacy & Cookies</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;

