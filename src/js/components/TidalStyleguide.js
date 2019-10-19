import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TidalStyleguide extends Component {

    render() {
        return (
            <div id="case-study-modal" className="case-study tidal-styleguide">

                <div className="header">
                    <div className="center">
                        <h1>v3 Styleguide</h1>
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
                            <p>SASS Architect</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Context:</strong>
                            </div>
                            <p>Website for Brand Styleguide</p>
                            <p>Design system</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Period:</strong>
                            </div>
                            <p>2018 - 2019</p>
                        </div>
                    </div>

                    <div className="content">

                        <div className="job-desc cs-block">
                            <div className="left">
                                <p>During Q2 of 2018, Tidal Labs decided it was time for another iteration of the brand's design system. The design team produced an updated style guide and design system based on Brad Frost's Atomic Design methodology. The Sketch files and Photoshop compositions were beautifully put together, but unfortunately a bit cumbersome to reference by the engineering team.</p>
                                <p>To solve this problem, we decided to create a dev-friendly design system, naming convention and interactive style guide. I was responsible for building our new SCSS architecture from the ground up, which was referred to internally as "v3".</p>
                                <p>Once the new SCSS structure was in place, I was then tasked with building an interactive style guide website that developers could reference when building v3 components. In addition to seeing how components get rendered in the browser, developers could also grab the necessary class names, view hover states and interact with certain elements to see how they behave on the page.</p>
                            </div>
                            <div className="right">
                                <div className="device-screens">
                                    <img className="device-screen phone" src="./assets/img/work/tidal-styleguide/tidal-v3-phone.png" />
                                    <img className="device-screen tablet" src="./assets/img/work/tidal-styleguide/tidal-v3-tablet.png" />
                                    <img className="device-screen desktop" src="./assets/img/work/tidal-styleguide/tidal-v3-desktop-2.png" />
                                </div>
                            </div>
                        </div>

                        <div className="screens cs-block">
                            <div className="single-screen">
                                <strong>Navigation</strong>
                                <img src="./assets/img/work/tidal-styleguide/tidal-v3-nav.png" />
                            </div>
                            <div className="single-screen">
                                <strong>Colors</strong>
                                <img src="./assets/img/work/tidal-styleguide/tidal-v3-colors.png" />
                            </div>
                            <div className="single-screen">
                                <strong>Typography</strong>
                                <img src="./assets/img/work/tidal-styleguide/tidal-v3-type.png" />
                            </div>
                            <div className="single-screen">
                                <strong>Atoms section: Buttons</strong>
                                <img src="./assets/img/work/tidal-styleguide/tidal-v3-atoms.png" />
                            </div>
                            <div className="single-screen">
                                <strong>Molecules section: Messages</strong>
                                <img src="./assets/img/work/tidal-styleguide/tidal-v3-molecules.png" />
                            </div>
                            <div className="single-screen">
                                <strong>Organisms section: Godzilla system</strong>
                                <img src="./assets/img/work/tidal-styleguide/tidal-v3-organisms.png" />
                            </div>
                            <div className="single-screen">
                                <strong>Interactive "pushout"</strong>
                                <img src="./assets/img/work/tidal-styleguide/tidal-v3-pushout.png" />
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