import React from 'react';
import './LandingScreen.css'
import Layout from '../../Components/Layout/Layout'
import fadin from 'fadin'

const LandingScreen = () => {

    //this function is creating the delay in the photos
    document.addEventListener('DOMContentLoaded', () => {
        fadin('.image', { delay: 200 })
    })

    document.addEventListener('DOMContentLoaded', () => {
        fadin('#test', { delay: 200 })
    })
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
                    <div id='test' data-delay='0.4'></div>
                    <div id='test' data-delay='0.4'></div>
                    <div id='test' data-delay='0.4'></div>
                    <div id='test' data-delay='0.4'></div>
                </section>
                <section className='section-container2'>
                    <div id='test' data-delay='0.4'></div>
                    <div id='test' data-delay='0.4'></div>
                    <div id='test' data-delay='0.4'></div>
                    <div id='test' data-delay='0.4'></div>
                </section>
                <div className='mustRead-container'>
                    <h1 className='must-read'>Must Read</h1>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default LandingScreen;