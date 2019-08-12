import React, {Component} from 'react';
import PropTypes from 'prop-types';

/* Import views */
import TidalDashboard from './TidalDashboard';
import TidalStyleguide from './TidalStyleguide';

class Modal extends Component {

    renderView() {
        switch(this.props.view) {
            case 'tidal-dash':
                return <TidalDashboard />;
                break;
            case 'tidal-styleguide':
                return <TidalStyleguide />;
                break;
        }
    }

    render() {
        const {show, onClose} = this.props;
        const showHideClassName = show ? "modal visible" : "modal hidden";

        return (
            <div id="modal-window" className={showHideClassName}>
                <div className="modal-content">
                    <button onClick={onClose}>CLOSE</button>
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