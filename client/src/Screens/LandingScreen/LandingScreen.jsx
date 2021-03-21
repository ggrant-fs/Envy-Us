import fadin from 'fadin'
import React from 'react';
import './LandingScreen.css'
import ReactPlayer from 'react-player'
import Layout from '../../Components/Layout/Layout'


const LandingScreen = (props) => {

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
                            <hr />
                            <p>By Conner Spencer</p>
                        </div>
                    </div>
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
                            <hr />
                            <p>By Anna Dennis</p>
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
                            <hr />
                            <p>By Tonya Lloyd</p>
                        </div>
                    </div>
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
                            <hr />
                            <p>By Cindy Tao</p>
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
                            <hr />
                            <p>By Gabriel Washington</p>
                        </div>
                    </div>
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
                            <hr />
                            <p>By Betty Rouren</p>
                        </div>
                    </div>
                    <div>
                        <div className='test' id='test-7'></div>
                        <div className='caption-div'>
                            <span className='caption-span'>
                                <h2>Opinion</h2>
                            </span>
                            <p className='subcaption'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed
                                iusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad
                                minim veniam
                            </p>
                            <hr />
                            <p>By Oscar Nymar</p>
                        </div>
                    </div>
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
                            <hr />
                            <p>By Jonathan Lin</p>
                        </div>
                    </div>
                </section>
                <div className='mustRead-container'>
                    <h1 className='must-read'>Must Read</h1>
                </div>
                <section className='mustRead-article'>
                    <div id='mustRead1'></div>
                    <div className='break'></div>
                    <div id='mustRead2'></div>
                    <div className='break'></div>
                    <div id='mustRead3'></div>
                </section>
                <section className='mustRead-article'>
                    <div id='mustRead4'></div>
                    <div className='break'></div>
                    <div id='mustRead5'></div>
                </section>
                <section className='video'>
                    <ReactPlayer
                        url='https://youtu.be/XbWIe2KCxqg'
                        width='87%'
                        height='700px'
                        controls={false}
                        muted={true}
                        playing={true}
                        light={false}
                        loop={true}
                    />
                </section>

            </Layout>
        </React.Fragment>
    );
};

export default LandingScreen;