import React from 'react';
import './LandingScreen.css'
import Layout from '../../Components/Layout/Layout'


const LandingScreen = () => {
    return (
        <React.Fragment>
            <Layout>
                <div className='container'>
                    <div id='img-1' className='image'></div>
                    <div id='img-2' className='image'></div>
                    <div id='img-3' className='image'></div>
                </div>
                <div className='feature-container'>
                    <h1 className='feature-title'>Featured News</h1>
                </div>
                <section className='section-container'>
                    <div id='test'></div>
                    <div id='test'></div>
                    <div id='test'></div>
                    <div id='test'></div>

                </section>
                {/* <hr /> */}
                <section className='section-container2'>
                    <div id='test'></div>
                    <div id='test'></div>
                    <div id='test'></div>
                    <div id='test'></div>
                </section>
                <div className='mustRead-container'>
                    <h1 className='must-read'>Must Read</h1>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default LandingScreen;