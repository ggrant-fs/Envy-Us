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

            </footer>
        </React.Fragment>
    );
};

export default Footer;

//#ff5a5f