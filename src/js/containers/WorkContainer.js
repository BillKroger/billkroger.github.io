import React, {Component} from 'react';
import Modal from "../components/Modal";
import PropTypes from 'prop-types';

export const portfolioWorks = [
    {
        view_name: 'tidal-dash',
        job_name: 'CMS development',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/tidal-imgs-test-bg.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/cm-logo.svg',
    },
    {
        view_name: 'tidal-styleguide',
        job_name: 'v3 Styleguide',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/tidal-styleguide-test-2.png',
        logo: '../../../billkroger.github.io/assets/img/work/v3-logo.svg',
    },
    {
        view_name: 'tidal-marketing',
        job_name: 'Tid.al marketing sites',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/tidal-marketing-sites-3c.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/tidal-labs-logo.svg',
    },
    {
        view_name: 'global-citizen',
        job_name: 'Global Citizen community',
        client_name: 'Global Citizen',
        logo: '../../../billkroger.github.io/assets/img/work/gc-logo.svg',
        image: '../../../billkroger.github.io/assets/img/work/gc-test-2.jpg',
        style: {backgroundPosition: 'center 0%'},
    },
    {
        view_name: 'drinkwire',
        job_name: 'Drinkwire community',
        client_name: 'Liquor.com',
        logo: '../../../billkroger.github.io/assets/img/work/ldc-logo.svg',
        image: '../../../billkroger.github.io/assets/img/work/dw1.jpg',
    },
    {
        view_name: 'concern',
        job_name: 'Email development',
        client_name: 'Concern Worldwide',
        logo: '../../../billkroger.github.io/assets/img/work/concern-logo.svg',
        image: '../../../billkroger.github.io/assets/img/work/concern-test.jpg',
    },
    {
        view_name: 'calculators',
        job_name: 'Custom calculators',
        client_name: 'VSSL Agency',
        logo: '../../../billkroger.github.io/assets/img/work/vssl-logo-dark.png',
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
                <a role="button" onClick={this.showModal.bind(this, spec.view_name)}>
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
                <div className="section-header">
                    {/*<span>[ 01 ]</span>*/}
                    <h1>Work.</h1>
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