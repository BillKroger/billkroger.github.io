import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Concern extends Component {

    render() {
        return (
            <div id="case-study-modal" className="case-study concern">

                <div className="header">
                    <div className="center">
                        <h1>Email Development</h1>
                        <img src="./assets/img/work/concern/logo-concern-header.svg" />
                    </div>
                </div>

                <div className="main">

                    <div className="meta cs-block">
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Role:</strong>
                            </div>
                            <p>Front-End Developer</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Context:</strong>
                            </div>
                            <p>Monthly Newsletter</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Period:</strong>
                            </div>
                            <p>2016 - 2017</p>
                        </div>
                    </div>

                    <div className="content">

                        <div className="job-desc cs-block">
                            <div className="left">
                                <p>Concern Worldwide is a not-for-profit humanitarian organization based in Ireland that works to end extreme poverty and improve the lives of people living in developing countries.</p>
                                <p>They asked me to help code a monthly email newsletter template that one of their staff members had designed. In addition to building the actual template, I also needed to make sure it was responsive and would display correctly in all major browsers and email clients.</p>
                            </div>
                            <div className="right">
                                <div className="device-screens">
                                    <img className="device-screen phone" src="./assets/img/work/concern/apple-mail-mobile-1.jpg" />
                                    <img className="device-screen tablet" src="./assets/img/work/concern/gmail-tablet-1.jpg" />
                                    <img className="device-screen desktop" src="./assets/img/work/concern/apple-mail-desktop-1.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="screens cs-block">
                            <div className="single-screen">
                                <strong>Mobile views</strong>
                                <img src="./assets/img/work/concern/mobile-screens.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>Gmail desktop view</strong>
                                <img src="./assets/img/work/concern/gmail-desktop.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>Apple Mail desktop view</strong>
                                <img src="./assets/img/work/concern/apple-mail-desktop-2.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>Full template</strong>
                                <img src="./assets/img/work/concern/concern-full-1.jpg" />
                                <img src="./assets/img/work/concern/concern-full-2.jpg" />
                                <img src="./assets/img/work/concern/concern-full-3.jpg" />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default Concern;

Concern.defaultProps = {

};

Concern.propTypes = {

};