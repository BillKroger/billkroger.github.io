import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TidalStyleguide extends Component {

    render() {
        return (
            <div className="case-study tidal-styleguide">

                <div className="header">
                    <div className="center">
                        <h1>v3 Styleguide</h1>
                        <img src="../assets/img/work/tidal-dashboard/tidal-labs-wh.png" />
                    </div>
                </div>

                <div className="main">

                    <div className="meta">
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Role:</strong>
                            </div>
                            <p>Front-End Developer</p>
                            <p>SCSS Architect</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Context:</strong>
                            </div>
                            <p>Website Build for Brand Styleguide</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Period:</strong>
                            </div>
                            <p>2018 - 2019</p>
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