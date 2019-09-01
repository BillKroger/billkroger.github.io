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
        const {show, onClose} = this.props;
        const showHideClassName = show ? "modal visible" : "modal hidden";

        return (
            <div id="modal-window" className={showHideClassName}>
                <div className="modal-content">
                    <div className="modal-header">
                        <a role="button" className="close-btn" onClick={onClose}><i className="close-icon"></i></a>
                    </div>
                    {this.renderView()}
                </div>
            </div>
        )
    }

}

export default Modal;

Modal.propTypes = {
    view: PropTypes.node.isRequired,
    onClose: PropTypes.func,
    show: PropTypes.bool,
};