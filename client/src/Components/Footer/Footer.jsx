import React from 'react';
import { useState } from 'react'
import './Footer.css'
const Footer = () => {
    const [newSubscriber, setNewSubscriber] = useState({
        name: '',
        email: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setNewSubscriber({
            ...newSubscriber,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

    }

    return (
        <React.Fragment>
            <footer onSubmit={handleSubmit}>

                <form>
                    <lable htmlfor='email'></lable>
                    <div className='input-container'>
                        <input
                            className='form-input'
                            type='email'
                            name='email'
                            value={newSubscriber.name}
                            onChange={handleChange}
                            placeHolder='Enter Your Email Address'
                        />
                        <lable></lable>
                        <input
                            className='form-input'
                            type='text'
                            name='name'
                            value={newSubscriber.name}
                            onChange={handleChange}
                            placeHolder='Enter Your Name'
                        />
                    </div>
                    <div className='button-container'>
                        <div>
                            <button type='submit' id='submit-button'>Sign Up</button>
                        </div>
                    </div>
                </form>
            </footer>
        </React.Fragment>
    );
};

export default Footer;

