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
            <footer>

                <form onSubmit={handleSubmit}>
                    <div className='form-title'>
                        <div className='title-div'>
                            <div>
                                <h1 > Don't Miss a Beat</h1>
                                {/* <p>Sign up for the latest news in fashion and culture</p> */}
                            </div>
                        </div>
                    </div>
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

                    <div className='terms-of-service'>
                        <p id='terms'>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </form>
            </footer>
        </React.Fragment>
    );
};

export default Footer;

