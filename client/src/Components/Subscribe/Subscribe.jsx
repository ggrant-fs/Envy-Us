import React from 'react';
import { useState, useEffect } from 'react'
import { createSubscription } from '../../services/subscribe'

const Subscribe = () => {
    const [newSubscription, setNewSubscription] = useState({
        email: ''
    })

    const [isCreated, setIsCreated] = useState(false)


    const handleChange = async (event) => {
        const { name, value } = event.target
        setNewSubscription({
            ...setEmail,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createSubscription(subsciption)
    }
    return (
        <React.Fragment>
            <form>
                <input
                    type="email"
                    name="email"
                    value={newSubscription.email}
                    onChange={handleSubmit}
                    placeHolder="Enter Email..."
                />
            </form>
        </React.Fragment>
    );
};

export default Subscribe;