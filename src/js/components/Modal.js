import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* Import views */
import TidalDashboard from './TidalDashboard';
import TidalStyleguide from './TidalStyleguide';
import TidalMarketing from "./TidalMarketing";
import Concern from "./Concern";
import Vssl from "./Vssl";

class Modal extends Component {

    renderView() {
        switch(this.props.view) {
            case 'tidal-dash':
                return <TidalDashboard />;
                break;
            case 'tidal-styleguide':
                return <TidalStyleguide />;
                break;
            case 'tidal-marketing':
                return <TidalMarketing />;
                break;
            case 'concern':
                return <Concern />;
                break;
            case 'vssl':
                return <Vssl />;
                break;
            default:
                return <TidalDashboard />;
        }
    }

    render() {
        const {show, onClose, handleClickPrev, handleClickNext, prevViewObj, nextViewObj} = this.props;
        const showHideClassName = show ? "modal visible" : "modal hidden";
        const nextCaseImage = nextViewObj.image;

        return (
            <div id="modal-window" className={showHideClassName}>
                <div className="modal-content">
                    <a role="button" className="close-btn" onClick={onClose}><i className="close-icon"></i></a>
                    {this.renderView()}
                    <div className="cs-nav">
                        <div className="cs-nav-background" style={{backgroundImage: `url(${nextCaseImage})`}}></div>
                        {/*<a role="button" className="cs-nav-btn prev" onClick={handleClickPrev}>*/}
                        {/*    <div className="cs-nav-btn-arrow">*/}
                        {/*        <i className="fa fa-long-arrow-left"></i>*/}
                        {/*    </div>*/}
                        {/*    <div className="cs-nav-btn-content">*/}
                        {/*        /!*<h3>Previous Project</h3>*!/*/}
                        {/*        <span className="cs-nav-job-name">{prevViewObj.job_name}</span>*/}
                        {/*        <img className="cs-nav-logo" src={prevViewObj.cs_nav_logo} alt={prevViewObj.client_name} />*/}
                        {/*    </div>*/}
                        {/*</a>*/}
                        <a role="button" className="cs-nav-btn next" onClick={handleClickNext}>
                            <div className="cs-nav-btn-content">
                                <div className="left">
                                    <span className="cs-nav-text">Next Project</span>
                                    <span className="cs-nav-job-name">{nextViewObj.job_name}</span>
                                    <span className="cs-nav-client-name">{nextViewObj.client_name}</span>
                                    {/*<img className="cs-nav-logo" src={nextViewObj.cs_nav_logo} alt={nextViewObj.client_name} />*/}
                                </div>
                                {/*<div className="right">*/}
                                {/*    <div className="cs-nav-btn-arrow"></div>*/}
                                {/*</div>*/}
                            </div>
                        </a>
                    </div></div></div>
        )
    }

}

export default Modal;

Modal.propTypes = {
    view: PropTypes.node.isRequired,
    onClose: PropTypes.func,
    handleClickPrev: PropTypes.func,
    handleClickNext: PropTypes.func,
    prevViewObj: PropTypes.obj,
    nextViewObj: PropTypes.obj,
    show: PropTypes.bool,
};