import React from 'react';
import { useState, useEffect } from 'react'
const footerForm = () => {
    const [subscribtion, setSubscribtion] = useState({
        email: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setSubscribtion({
            ...subscribtion,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='email'
                    name='email'
                    value={subscribtion.email}
                    onChange={handleChange}
                    placeholder='Enter Email'
                />
                <input type='submit' />
            </form>
        </div>
    );
};

export default footerForm;