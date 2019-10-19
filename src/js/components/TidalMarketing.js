import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TidalStyleguide extends Component {

    render() {
        return (
            <div id="case-study-modal" className="case-study tidal-marketing">

                <div className="header">
                    <div className="center">
                        <h1>Marketing Sites</h1>
                        <img src="./assets/img/work/tidal-dashboard/tidal-labs-wh.png" />
                    </div>
                </div>

                <div className="main">

                    <div className="meta cs-block">
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Role:</strong>
                            </div>
                            <p>Front-End Developer</p>
                            <p></p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Context:</strong>
                            </div>
                            <p><a className="site-link" href="https://tid.al" target="_blank"><span>Primary marketing website</span><i className="fa fa-external-link"></i></a></p>
                            <p><a className="site-link" href="https://tid.al/platform" target="_blank"><span>Platform page</span><i className="fa fa-external-link"></i></a></p>
                            <p><a className="site-link" href="https://network.tid.al/" target="_blank"><span>Influencer network website</span><i className="fa fa-external-link"></i></a></p>
                            <p><a className="site-link" href="https://tid.al/blog/" target="_blank"><span>Company blog</span><i className="fa fa-external-link"></i></a></p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Period:</strong>
                            </div>
                            <p>2016 - 2019</p>
                        </div>
                    </div>

                    <div className="content">

                        <div className="job-desc cs-block">
                            <div className="left">
                                <p>As the influencer marketing space evolves and competition continues to grow at an abnormally fast rate, it is necessary to stay in line with what brands need from the software they use. Being one of the first platforms to exist in this industry, Tidal Labs has always done a good job with this. Every 6 to 12 months the company reviews the content of its marketing websites, which often results in a major design update.</p>
                                <p>Since my first day at Tidal Labs, I have been responsible for developing and maintaining all of these web properties. Although the initial compositions are created by the design team, I often assist with the web design process as well.</p>
                            </div>
                            <div className="right">
                                <div className="device-screens">
                                    <div className="device-screen tidal-marketing"></div>
                                    <img className="device-screen desktop tidal-marketing-mobile" src="./assets/img/work/tidal-marketing/frame1.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="screens cs-block">
                            <div className="single-screen">
                                <strong>Tid.al Home page</strong>
                                <img src="./assets/img/work/tidal-marketing/tidal-home-top.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>Platform page</strong>
                                <img src="./assets/img/work/tidal-marketing/tidal-platform-full-crop.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>Network.tid.al</strong>
                                <img src="./assets/img/work/tidal-marketing/tidal-network-1.jpg" />
                                <img src="./assets/img/work/tidal-marketing/tidal-network-2.jpg" style={{marginTop: '-3px'}}/>
                            </div>
                            <div className="single-screen">
                                <strong>Blog.tid.al</strong>
                                <img src="./assets/img/work/tidal-marketing/tidal-blog-full-crop.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>About page</strong>
                                <img src="./assets/img/work/tidal-marketing/about-page-2.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>Contact page</strong>
                                <img src="./assets/img/work/tidal-marketing/contact-page.jpg" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default TidalStyleguide;

TidalStyleguide.defaultProps = {

};

TidalStyleguide.propTypes = {

};