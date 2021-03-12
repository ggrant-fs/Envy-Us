import React from 'react';
import './LandingScreen.css'
import Layout from '../../Components/Layout/Layout'
import fadin from 'fadin'

const LandingScreen = (props) => {
    console.log(props)
    //this function is creating the delay in the photos
    document.addEventListener('DOMContentLoaded', () => {
        fadin('.image', { delay: 200 })
    })

    document.addEventListener('DOMContentLoaded', () => {
        fadin('.test', { delay: 300 })
    })

    document.addEventListener('DOMContentLoaded', () => {
        fadin('.caption-div', { delay: 300 })
    })

    document.addEventListener('DOMContentLoaded', () => {
        fadin('.caption-span', { delay: 300 })
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
                    <div>
                        <div className='test' id='test-1'></div>
                        <div className='caption-div'>
                            <span className='caption-span'>
                                <h2>Fashion</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                        </div>
                    </div>
                    {/* space */}
                    <div>
                        <div className='test' id='test-2'></div>
                        <div className='caption-div' >
                            <span className='caption-span'>
                                <h2>Media</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='test' id='test-3'></div>
                        <div className='caption-div'>
                            <span>
                                <h2 className='caption-span'>Culture</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                        </div>
                    </div>
                    {/* space */}
                    <div>
                        <div className='test' id='test-4'></div>
                        <div className='caption-div'>
                            <span className='caption-span'>
                                <h2>Arts</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                        </div>
                    </div>
                </section>
                <section className='section-container2'>
                    <div>
                        <div className='test' id='test-5'></div>
                        <div className='caption-div'>
                            <span className='caption-span'>
                                <h2>Culture</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                        </div>
                    </div>
                    {/* space */}
                    <div>
                        <div className='test' id='test-6'></div>
                        <div className='caption-div'>
                            <span className='caption-span'>
                                <h2>Fashion</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                        </div>
                    </div>
                    {/* space */}
                    <div>
                        <div className='test' id='test-7'></div>
                        <div className='caption-div'>
                            <span className='caption-span'>
                                <h2>opinion</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                        </div>
                    </div>
                    {/* space */}
                    <div>
                        <div className='test' id='test-8'></div>
                        <div className='caption-div'>
                            <span className='caption-span'>
                                <h2>Music</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                        </div>
                    </div>
                </section>
                <div className='mustRead-container'>
                    <h1 className='must-read'>Must Read</h1>
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default LandingScreen;