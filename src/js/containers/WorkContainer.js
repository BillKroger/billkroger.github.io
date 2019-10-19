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
        cs_nav_logo: '../../../billkroger.github.io/assets/img/work/tidal-dashboard/cs-nav-cm.svg'
    },
    {
        view_name: 'tidal-styleguide',
        job_name: 'v3 Styleguide',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/stripe-tidal-styleguide.png',
        logo: '../../../billkroger.github.io/assets/img/work/logo-v3.svg',
        cs_nav_logo: '../../../billkroger.github.io/assets/img/work/tidal-styleguide/cs-nav-v3.svg'
    },
    {
        view_name: 'tidal-marketing',
        job_name: 'Marketing sites',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/stripe-tidal-marketing.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/logo-tidal.svg',
        cs_nav_logo: '../../../billkroger.github.io/assets/img/work/tidal-dashboard/tidal-labs-wh.png'
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
        view_name: 'vssl',
        job_name: 'Custom Interactivity',
        client_name: 'VSSL Agency',
        image: '../../../billkroger.github.io/assets/img/work/stripe-vssl.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/logo-vssl.png',
        cs_nav_logo: '../../../billkroger.github.io/assets/img/work/vssl/logo-vssl-header.svg'
    },
    {
        view_name: 'concern',
        job_name: 'Email development',
        client_name: 'Concern Worldwide',
        image: '../../../billkroger.github.io/assets/img/work/stripe-concern-2.jpg',
        logo: '../../../billkroger.github.io/assets/img/work/logo-concern.svg',
        cs_nav_logo: '../../../billkroger.github.io/assets/img/work/concern/logo-concern-header.svg'
    },
];

class WorkContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            currentViewIndex: 0,
            nextViewIndex: 1,
            prevViewIndex: null,
        };
    }

    showModal(view) {
        const currentViewIndex = portfolioWorks.map(function(e) { return e.view_name; }).indexOf(view);

        const nextViewIndex = currentViewIndex === portfolioWorks.length - 1 ? 0 : currentViewIndex + 1;

        this.setState({
            showModal: true,
            currentViewIndex: currentViewIndex,
            nextViewIndex: nextViewIndex
        })
    }

    hideModal() {
        this.setState({
            showModal: false
        })
    }

    renderLink(spec, delay) {
        const image = spec.image ? spec.image : null;
        const logo = spec.logo ? spec.logo : null;
        const style = {...spec.style, backgroundImage: `url(${image})` };

        return (
            <div className="portfolio-item" data-aos="fade-right" data-aos-once={true} data-aos-delay={delay} data-aos-offset="0">
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
        let i, delay = 0;
        return portfolioWorks.map(item => {
            delay += 50;
            i++;
            return this.renderLink(item, delay);
        })
    }

    handleClickPrev() {
        const prevViewIndex = this.state.currentViewIndex === 0 ? portfolioWorks.length - 1 : this.state.currentViewIndex - 1;
        // scroll to top of the case study
        document.getElementById('case-study-modal').scrollIntoView();

        return this.setState({currentViewIndex: prevViewIndex});
    }

    handleClickNext() {
        const nextViewIndex = this.state.currentViewIndex === portfolioWorks.length - 1 ? 0 : this.state.currentViewIndex + 1;

        // scroll to top of the case study
        document.getElementById('case-study-modal').scrollIntoView();

        return this.setState({currentViewIndex: nextViewIndex});
    }

    render() {
        const currentViewIndex = this.state.currentViewIndex;
        const view = currentViewIndex !== null && typeof currentViewIndex !== 'undefined' && currentViewIndex >= 0
            ? portfolioWorks[currentViewIndex]['view_name']
            : null;

        const prevViewObj = portfolioWorks[currentViewIndex] === portfolioWorks[0]
            ? portfolioWorks[portfolioWorks.length - 1]
            : portfolioWorks[currentViewIndex - 1];

        const nextViewObj = portfolioWorks[currentViewIndex] === portfolioWorks[portfolioWorks.length - 1]
            ? portfolioWorks[0]
            : portfolioWorks[currentViewIndex + 1];

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
                    view={view}
                    onClose={this.hideModal.bind(this)}
                    show={this.state.showModal}
                    handleClickNext={this.handleClickNext.bind(this)}
                    handleClickPrev={this.handleClickPrev.bind(this)}
                    prevViewObj={prevViewObj}
                    nextViewObj={nextViewObj}
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