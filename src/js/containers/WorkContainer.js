import React, {Component} from 'react';
import Modal from "../components/Modal";
import PropTypes from 'prop-types';

export const portfolioWorks = [
    {
        view_name: 'tidal-dash',
        job_name: 'CMS development',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/stripe-tidal-db.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/logo-cm.svg',
    },
    {
        view_name: 'tidal-styleguide',
        job_name: 'v3 Styleguide',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/stripe-tidal-styleguide.png',
        logo: '../../../billkroger.github.io/assets/img/work/logo-v3.svg',
    },
    {
        view_name: 'tidal-marketing',
        job_name: 'Tid.al marketing sites',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/stripe-tidal-marketing.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/logo-tidal.svg',
    },
    // {
    //     view_name: 'global-citizen',
    //     job_name: 'Global Citizen community',
    //     client_name: 'Global Citizen',
    //     image: '../../../billkroger.github.io/assets/img/work/stripe-gc.jpg',
    //     logo: '../../../billkroger.github.io/assets/img/work/logo-gc.svg',
    //     style: {backgroundPosition: 'center 0%'},
    // },
    // {
    //     view_name: 'drinkwire',
    //     job_name: 'Drinkwire community',
    //     client_name: 'Liquor.com',
    //     image: '../../../billkroger.github.io/assets/img/work/stripe-drinkwire.jpg',
    //     logo: '../../../billkroger.github.io/assets/img/work/logo-ldc.svg',
    // },
    {
        view_name: 'vssl-calc',
        job_name: 'Custom Interactivity',
        client_name: 'VSSL Agency',
        image: '../../../billkroger.github.io/assets/img/work/stripe-vssl.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/logo-vssl.png',
    },
    {
        view_name: 'concern',
        job_name: 'Email development',
        client_name: 'Concern Worldwide',
        image: '../../../billkroger.github.io/assets/img/work/stripe-concern-2.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/logo-concern.svg',
    },
];

class WorkContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            currentView: null,
        };
    }

    showModal(view) {
        this.setState({
            showModal: true,
            currentView: view,
        })
    }

    hideModal() {
        this.setState({
            showModal: false
        })
    }

    renderLink(spec) {
        const image = spec.image ? spec.image : null;
        const logo = spec.logo ? spec.logo : null;
        const style = {...spec.style, backgroundImage: `url(${image})` };

        return (
            <div className="portfolio-item">
                <a className="modal-link" role="button" onClick={this.showModal.bind(this, spec.view_name)}>
                    <div className="bg-image" style={style}></div>
                    <div className="logo"><img src={logo} /></div>
                    <div className="text">
                        <span className="name">{spec.job_name}</span>
                        <span className="client">{spec.client_name}</span>
                    </div>
                </a>
            </div>
        )
    }

    renderLinks() {
        return portfolioWorks.map(item => {
            return this.renderLink(item);
        })
    }

    render() {
        return (
            <div className="section-inner work-container">
                <div className="section-header" data-aos="fade-up">
                    <div className="header-text">
                        <span className="num">02</span>
                        <h1>work.</h1>
                    </div>
                </div>

                {this.renderLinks()}

                <Modal
                    view={this.state.currentView}
                    onClose={this.hideModal.bind(this)}
                    show={this.state.showModal}
                />

            </div>
        );
    }

}

export default WorkContainer;

WorkContainer.defaultProps = {
    style: {},
};

WorkContainer.propTypes = {
    style: PropTypes.object,
};