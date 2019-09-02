import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TidalDashboard extends Component {

    render() {
        return (
            <div className="case-study tidal-dashboard">

                <div className="header">
                    <div className="center">
                        <h1>CMS Development</h1>
                        <img src="./assets/img/work/tidal-dashboard/tidal-labs-wh.png" />
                    </div>
                </div>

                <div className="main">

                    <div className="meta cs-block">
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

                    <div className="content">

                        <div className="job-desc cs-block">
                            <div className="left">
                                <img className="content-metric" src="./assets/img/work/tidal-dashboard/content-metric.svg" />
                                <p>Tidal Labs is an NYC-based tech firm that specializes in building software for the influencer marketing space. Tidal's flagship product, the ContentMetric Dashboard, is a robust CMS that makes it easier for brands to manage large-scale influencer campaigns.</p>
                                <p>As a software engineer at Tidal, my primary role has been to actively develop and maintain this beast of an application. On the front end I spend much of my time creating new features and improving the UI/UX based on user feedback. On the back end I am developing RESTful APIs, building new endpoints, bash scripting, unit testing and "massaging" data.</p>
                                <p>During Q2 of 2017, the company began converting the application from PHP to React JS. As a result, I've also had the responsibility of re-building and testing many of these legacy components.</p>
                            </div>
                            <div className="right">
                                <div className="device-screens">
                                    <img className="device-screen phone" src="./assets/img/work/tidal-dashboard/screen-phone.jpg" />
                                    <img className="device-screen tablet" src="./assets/img/work/tidal-dashboard/screen-tablet.jpg" />
                                    <img className="device-screen desktop" src="./assets/img/work/tidal-dashboard/screen-desktop.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="list clients cs-block">
                            <div className="meta-col-header">
                                <strong>Used by:</strong>
                            </div>
                            <ul>
                                <li><img src="./assets/img/work/tidal-dashboard/c02.png" /></li>
                                <li><img src="./assets/img/work/tidal-dashboard/c03.png" /></li>
                                <li><img src="./assets/img/work/tidal-dashboard/c04.png" /></li>
                                <li><img src="./assets/img/work/tidal-dashboard/c05.png" /></li>
                                <li><img src="./assets/img/work/tidal-dashboard/c06.png" /></li>
                                <li><img src="./assets/img/work/tidal-dashboard/c07.png" /></li>
                                <li><img src="./assets/img/work/tidal-dashboard/c08.png" /></li>
                                <li><img src="./assets/img/work/tidal-dashboard/c09.png" /></li>
                                <li><img src="./assets/img/work/tidal-dashboard/c11.png" /></li>
                            </ul>
                        </div>

                        <div className="list tech-stack cs-block">
                            <div className="meta-col-header">
                                <strong>Tech stack:</strong>
                            </div>
                            <ul>
                                <li><img src="./assets/img/tech-logos/react.png" /></li>
                                <li><img src="./assets/img/tech-logos/redux.png" /></li>
                                <li><img src="./assets/img/tech-logos/d3.png" /></li>
                                <li><img src="./assets/img/tech-logos/laravel.png" /></li>
                                <li><img src="./assets/img/tech-logos/sass.png" /></li>
                                <li><img src="./assets/img/tech-logos/postgresql.png" /></li>
                                <li><img src="./assets/img/tech-logos/mongodb.png" /></li>
                                <li><img src="./assets/img/tech-logos/redis.png" /></li>
                                <li><img src="./assets/img/tech-logos/elasticsearch.png" /></li>
                                <li><img src="./assets/img/tech-logos/webpack.png" /></li>
                                <li><img src="./assets/img/tech-logos/docker.png" /></li>
                            </ul>
                        </div>

                        <div className="mockup-full-pg cs-block">
                            <img src="./assets/img/work/tidal-dashboard/mockup-imac-gold-trans.png" />
                        </div>

                        <div className="screens cs-block">
                            <div className="single-screen">
                                <strong>User detail view</strong>
                                <img src="./assets/img/work/tidal-dashboard/user-detail-view.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>Campaign stats and reporting</strong>
                                <img src="./assets/img/work/tidal-dashboard/campaign-stats-2.png" />
                            </div>
                            <div className="single-screen nav">
                                <strong>Navigation</strong>
                                <img className="dropdowns" src="./assets/img/work/tidal-dashboard/nav-v3-dropdowns-2.png" />
                                <img className="notifs" src="./assets/img/work/tidal-dashboard/nav-v3-notifications.png" />
                            </div>
                        </div>

                        <div className="job-desc cs-block creator-exchange">
                            <div className="left">
                                <img className="creator-exchange" src="./assets/img/work/tidal-dashboard/creator-exchange.svg" />
                                <p>While the ContentMetric dashboard is used by brands to manage campaigns, a separate dashboard exists specifically for the creators who participate in those campaigns.</p>
                                <p>The CreatorExchange is where influencers can go to see which campaigns they've been invited into, negotiate their compensation, draft and submit content, manage their profile and more. Much like the one on the management side, I have been actively developing this dashboard on the influencer side for most of my tenure at Tidal.</p>
                                <p>Some significant contributions I've made to this part of the application include building the 'Requirements UI' (where influencers complete campaign requirements), converting major components to React, and upgrading the dashboard from desktop-only to mobile-friendly.</p>
                            </div>
                            <div className="right">
                                <div className="device-screens">
                                    <img className="device-screen phone" src="./assets/img/work/tidal-dashboard/edit-profile-phone.png" />
                                    <img className="device-screen tablet" src="./assets/img/work/tidal-dashboard/edit-profile-tablet-portrait.png" />
                                    <img className="device-screen desktop" src="./assets/img/work/tidal-dashboard/influencer-ui-desktop-final.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="mockup-full-pg cs-block">
                            <img src="./assets/img/work/tidal-dashboard/creator-exchange-laptop.png" />
                        </div>

                        <div className="screens cs-block">
                            <div className="single-screen">
                                <strong>Edit Profile UI</strong>
                                <img src="./assets/img/work/tidal-dashboard/contribute-edit-profile.jpg" />
                            </div>
                            <div className="single-screen">
                                <strong>Dashboard Home - Content</strong>
                                <img src="./assets/img/work/tidal-dashboard/contribute-home-desktop-content.png" />
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