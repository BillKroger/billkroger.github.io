import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TidalDashboard extends Component {

    render() {
        return (
            <div className="case-study tidal-dashboard">
                <div className="header">
                    <div className="center">
                        <h1>CMS Development</h1>
                        <img src="../assets/img/work/tidal-dashboard/tidal-labs-wh.png" />
                    </div>
                </div>
                <div className="main">

                    <div className="meta">
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Role:</strong>
                            </div>
                            <p>Full-Stack Software Engineer</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Context:</strong>
                            </div>
                           <p>Product Development</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Period:</strong>
                            </div>
                            <p>2016 - 2019</p>
                        </div>
                    </div>

                    {/*<div className="intro">*/}
                        {/*<div className="left">*/}
                            {/*<h1>CMS Development</h1>*/}
                            {/*<h3><em>Tidal Labs, Inc.</em></h3>*/}
                        {/*</div>*/}
                        {/*<div className="right">*/}
                            {/*<ul>*/}
                                {/*<li><strong>Role:</strong><span>Full-Stack Software Engineer</span></li>*/}
                                {/*<li><strong>Context:</strong><span>Product Development</span></li>*/}
                                {/*<li><strong>Period:</strong><span>2016 - 2019</span></li>*/}
                            {/*</ul>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    <div className="content">
                        <div className="mockup-full-pg" style={{backgroundImage: 'url(../assets/img/work/tidal-dashboard/mockup-imac-gold-trans.png)'}}></div>
                        <div className="job-desc">
                            <div className="left">
                                <img className="content-metric" src="../assets/img/work/tidal-dashboard/content-metric.svg" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className="right">
                                <div className="device-screens">
                                    <img className="device-screen phone" src="../assets/img/work/tidal-dashboard/screen-phone.jpg" />
                                    <img className="device-screen tablet" src="../assets/img/work/tidal-dashboard/screen-tablet.jpg" />
                                    <img className="device-screen desktop" src="../assets/img/work/tidal-dashboard/screen-desktop.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="job-desc">
                            <div className="left">
                                <img className="creator-exchange" src="../assets/img/work/tidal-dashboard/creator-exchange.svg" />
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                            </div>
                            <div className="right">
                                <div className="device-screens">
                                    <img className="device-screen phone" src="../assets/img/work/tidal-dashboard/screen-phone.jpg" />
                                    <img className="device-screen tablet" src="../assets/img/work/tidal-dashboard/screen-tablet.jpg" />
                                    <img className="device-screen desktop" src="../assets/img/work/tidal-dashboard/screen-desktop.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default TidalDashboard;

TidalDashboard.defaultProps = {

};

TidalDashboard.propTypes = {

};