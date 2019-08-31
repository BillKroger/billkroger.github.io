import React, {Component} from 'react';
import PropTypes from 'prop-types';

export function preventDefaultIfPossible(event) {
    if (typeof event !== 'undefined' && typeof event.preventDefault !== 'undefined') {
        event.preventDefault();
    }
}

class Dropdown extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };

        this.wrapperRef = null;
        this.handleToggleExpanded = this.handleToggleExpanded.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({expanded: false});
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleSelectOption(option, event) {
        preventDefaultIfPossible(event);

        if (this.props.onChange) {
            this.props.onChange(option);
        }

        this.setState({expanded: false});
        return false;
    }

    handleToggleExpanded(event) {
        preventDefaultIfPossible(event);
        this.setState({expanded: !this.state.expanded});
    }

    renderOptions() {
        if (!this.state.expanded) return null;
        const {options} = this.props;
        return (
            <div className="options">
                <ul className="options-list">
                    {options.map((option, index) => {
                        let text = option.text ? option.text : option.value;

                        let classes = ['option'];
                        if (option.isActive) {
                            classes.push('active');
                        }

                        return (
                            <li
                                key={`select-option-${option.value || option.text}-${index}`}
                                onClick={this.handleSelectOption.bind(this, option)}
                                className={classes.join(' ')}>{text}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }

    getCurrentValueClasses(val) {
        let classes = ['current-selection'];

        if (val === this.props.defaultValue) {
            classes.push('default');
        }

        return classes.join(' ');
    }

    renderCurrentValue() {
        const {value, options, defaultValue} = this.props;
        let display = defaultValue;

        if (typeof value !== 'undefined') {
            let currentOption = options.find(function(option) {
                return option.value === value;
            });

            if (typeof currentOption !== 'undefined') {
                display = currentOption.text || currentOption.value;
            }
        }

        return (
            <div
                className={this.getCurrentValueClasses(display)}>
                {display}
            </div>
        );
    }

    render() {

        let classes = ['calc-dropdown', this.state.expanded ? 'open' : '', this.props.addlClasses];

        return (
            <div
                ref={this.setWrapperRef}
                className={classes.join(' ')}
                onClick={this.handleToggleExpanded}
            >
                <div className="dropdown-icon">
                    <i className="fa fa-angle-down"/>
                </div>
                {this.renderCurrentValue()}
                {this.renderOptions()}
            </div>
        );

    }
}

Dropdown.defaultProps = {
    addlClasses: '',
    defaultValue: '- Select One -',
};

Dropdown.propTypes = {
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    addlClasses: PropTypes.string,
};

export default Dropdown;