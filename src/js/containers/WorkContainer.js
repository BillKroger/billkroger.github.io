import React, {Component} from 'react';

export const portfolioWorks = [
    {
        job_name: 'ContentMetric Dashboard',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/tidal-dash-test.png',
        logo: '../../../billkroger.github.io/assets/img/work/cm-logo.svg',
    },
    {
        job_name: 'v3 Styleguide',
        client_name: 'Tidal Labs, Inc.',
        image: '../../../billkroger.github.io/assets/img/work/tidal-styleguide-test-2.png',
        //logo: '../../../billkroger.github.io/assets/img/work/tidal-labs-logo.svg',
        logo: '../../../billkroger.github.io/assets/img/work/v3-logo.svg',
    },
    {
        job_name: 'Custom calculators',
        client_name: 'VSSL Agency',
        logo: '../../../billkroger.github.io/assets/img/work/vssl-logo.svg',
    },
];

class WorkContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    renderLink(spec) {

        const image = spec.image ? spec.image : null;
        const logo = spec.logo ? spec.logo : null;
        return (
            <div className="portfolio-item">
                <a role="button">
                    <div className="bg-image" style={{backgroundImage: `url(${image})`}}></div>
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
        console.log(Object.keys(portfolioWorks));
        return (
            <div className="section-inner work-container">
                {this.renderLinks()}
            </div>
        );
    }

}

export default WorkContainer;