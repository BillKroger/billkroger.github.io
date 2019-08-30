import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider';

class Vssl extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 20,
            percent: '1.75',
        }
    }

    calcPercent() {
        const {value} = this.state;
        let percent;

        if (value >= 0 && value <= 14) {
            percent = '1.5';
        } else if (value >= 15 && value <= 29) {
            percent = '1.75';
        } else if (value >= 30 && value <= 44) {
            percent = '2.0';
        } else {
            percent = '3.0';
        }

        return percent;
    }

    renderSlider() {
        return (
            <Slider
                min={0}
                max={45}
                labels={
                    {0: '0 Days', 50: '', 100: '45 Days'}
                }
                tooltip={false}
                handleLabel={`${this.state.value} Days Net`}
                value={this.state.value}
                onChange={value => this.setState({
                    value,
                    percent: this.calcPercent()
                })}
            />
        )
    }

    render() {
        return (
            <div className="case-study vssl">

                <div className="header">
                    <div className="center">
                        <h1>Custom Interactivity</h1>
                        <img src="../assets/img/work/vssl/logo-vssl-header.svg" />
                    </div>
                </div>

                <div className="main">

                    <div className="meta cs-block">
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Role:</strong>
                            </div>
                            <p>JavaScript Developer</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Context:</strong>
                            </div>
                            <p>Loan Calculation Tools</p>
                        </div>
                        <div className="meta-col">
                            <div className="meta-col-header">
                                <strong>Period:</strong>
                            </div>
                            <p>2016</p>
                        </div>
                    </div>

                    <div className="content">

                        <div className="job-desc cs-block">
                            <div className="left">
                                <p>VSSL is an award-winning creative agency located on the docks of the San Diego bay. Their diverse portfolio of clients includes everything from local retailers to large cyber security firms.</p>
                                <p>One of the projects I worked on with VSSL was for a newly funded startup that offered on-demand purchase financing for small businesses. The client's UI/UX director wanted the new website to have some interactive elements such as a payment calculator and an interest rate slider tool.</p>
                                <p>Based on the provided specs, I built and tested these interactive tools for the client's website and made them both mobile-friendly as well. Custom features like these are always fun to create and it's satisfying for me to see a client's idea come to life.</p>
                            </div>
                            <div className="right">
                                <div className="device-screens">
                                    <img className="device-screen phone vssl" src="../assets/img/work/vssl/vssl-mobile-1.jpg" />
                                    <img className="device-screen tablet" src="../assets/img/work/vssl/vssl-tablet-1.jpg" />
                                    <img className="device-screen desktop" src="../assets/img/work/vssl/vssl-mobile-2b.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="widgets cs-block">

                            <div className="widget slider">
                                <div className="widget-inner">
                                    {this.renderSlider()}
                                    <span className="percentage">{`${this.state.percent}%`}</span>
                                </div>
                            </div>

                            <div className="widget calc">
                                <div className="widget-inner">

                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

export default Vssl;

Vssl.defaultProps = {

};

Vssl.propTypes = {

};