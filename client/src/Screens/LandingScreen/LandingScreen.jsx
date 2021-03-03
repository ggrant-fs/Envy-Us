import React from 'react';
import './LandingScreen.css'
import Layout from '../../Components/Layout/Layout'


const LandingScreen = () => {
    return (
        <React.Fragment>
            <Layout>
                <div className='container'>
                    <div className='image'></div>
                    <div className='image'></div>
                    <div className='image'></div>
                </div>
                <div className='feature-container'>
                    <h1 className='feature-title'>Featured News</h1>
                </div>
                <div className='mustRead-container'>
                    <h1 className='Must-Read'>Must Read</h1>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default LandingScreen;