import React, {Component} from 'react';
import Slider from 'react-rangeslider';
import Dropdown from './pieces/Dropdown';

export const durations = [
    {
        value: 180,
        text: '180 Days'
    },
    {
        value: 150,
        text: '150 Days'
    },
    {
        value: 120,
        text: '120 Days'
    },
    {
        value: 90,
        text: '90 Days'
    },
    {
        value: 60,
        text: '60 Days'
    },
    {
        value: 30,
        text: '30 Days'
    }
];

export const debitFreq = [
    {
        value: 7,
        text: 'weekly'
    },
    {
        value: 30,
        text: 'monthly'
    }
];

class Vssl extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 20,
            percent: '1.75',
            calc: {
                duration: {},
                debitFreq: {},
                inputAmt: null,
                outputAmt: null,
                numPayments: null,
                outputTerm: '',
            }
        };

    }

    componentDidMount() {
        const input = document.getElementById('orderAmt');
        input.addEventListener('keypress', this.numbersOnly, false);
        input.addEventListener('paste', function(e) {e.preventDefault();}, false);
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

    handleFieldChange(event) {
        const {name, value} = event.target;
        let calc = this.state.calc;
        calc[name] = value;
        this.setState({'calc': calc});
    }

    numbersOnly(evt) {
        const charCode = evt.charCode;
        if (charCode !== 0) {
            if (charCode < 48 || charCode > 57) {
                evt.preventDefault();
            }
        }
    }

    validateForm() {
        const {calc} = this.state;
        if (calc.inputAmt !== null && calc.inputAmt !== "" && calc.inputAmt >= 1 && calc.debitFreq.value && calc.duration.value) {
            return true;
        }
    }

    numberWithCommas(number) {
        if (number !== null && typeof number !== 'undefined') {
            return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
    }

    calculateNumPayments() {
        const {debitFreq, duration} = this.state.calc;
        let calcNumPayments;

        if ((debitFreq || {}).value === 7) {
            calcNumPayments = Math.floor((duration || {}).value / 7);

        } else if ((debitFreq || {}).value === 30) {
            calcNumPayments = Math.floor((duration || {}).value / 30);
        }

        return calcNumPayments;
    }

    calculateOutputAmt() {
        const {inputAmt, duration, debitFreq} = this.state.calc;
        const calcNumPayments = this.calculateNumPayments();
        let calcOutputAmt;

        const stepA = (inputAmt / calcNumPayments);
        const stepB = Math.floor((((15 / 1000) * ((duration || {}).value / 360)) * 12) * inputAmt) || 0;

        let stepC;
        if ((debitFreq || {}).value === 7) {
            stepC = 0.10;
        } else {
            stepC = 0;
        }

        const stepD = 0;
        const stepE = stepC - stepD;
        const stepF = Math.floor((((15 / 1000) * ((duration || {}).value / 360)) * 12) * inputAmt) || 0;
        const stepG = Math.ceil(stepE * stepF);
        const stepH = stepB - stepG;
        const stepI = stepH / calcNumPayments;

        const monthlyPayments = stepI + stepA;

        if (isNaN(monthlyPayments)) {
            calcOutputAmt = 0;
        } else {
            calcOutputAmt = monthlyPayments.toFixed(2) || 0;
        }

        return calcOutputAmt;
    }

    calculateOutputTerm() {
        const {debitFreq} = this.state.calc;
        let calcOutputTerm;
        if ((debitFreq || {}).value === 7) {
            calcOutputTerm = 'week';
        } else if ((debitFreq || {}).value === 30) {
            calcOutputTerm = 'month';

        }
        return calcOutputTerm;
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

    renderCalc() {
        const style = this.validateForm() ? {display: 'block'} : {display: 'none'};

        let outputAmt, numPayments, outputTerm;

        if (this.validateForm()) {
            numPayments = this.calculateNumPayments();
            outputAmt = this.calculateOutputAmt();
            outputTerm = this.calculateOutputTerm();
        }

        return (
            <div className="calculator">

                <div id="calc-top" className="calc-section">
                    <form onSubmit="return false">
                        <span className="calc-text">I need to place an order for</span>
                        <div className="calc-text-block">
                            <span className="calc-text dollar-sign">$</span>
                            <input
                                type="text"
                                step="1.0"
                                id="orderAmt"
                                onPaste="return false"
                                autoComplete="off"
                                className="number-input"
                                name="inputAmt"
                                value={this.state.calc.inputAmt}
                                onChange={this.handleFieldChange.bind(this)}
                            />
                            <span className="calc-text">.</span>
                        </div>
                        <span className="calc-text">I would like to spread my payments for this order over</span>
                        <Dropdown
                            addlClasses={"dd-duration"}
                            options={durations}
                            defaultValue={"Select one..."}
                            value={(this.state.calc.duration || {}).value}
                            onChange={value => this.setState({calc: {...this.state.calc, duration: value}})}
                        />
                        <span className="calc-text">and have my account debited</span>
                        <div className="calc-text-block">
                            <Dropdown
                                addlClasses={"dd-debitfreq"}
                                options={debitFreq}
                                defaultValue={"Select one..."}
                                value={(this.state.calc.debitFreq || {}).value}
                                onChange={value => this.setState({calc: {...this.state.calc, debitFreq: value}})}
                            />
                            <span className="calc-text">.*</span>
                        </div>
                    </form>
                </div>

                <div id="calc-bottom" className="calc-section" style={style}>

                    <span className="calc-text">We will advance your order payment today, and debit you</span>

                    <div className="calc-output-wrapper">
                        <span className="calc-output calc-text no-margin">$</span>
                        <span className="calc-output calc-text no-margin" id="outputAmt">{this.numberWithCommas(outputAmt)}</span>
                        <span className="calc-text no-margin">/</span><span id="outputTerm1" className="calc-output calc-text">{outputTerm}</span>
                    </div>

                    <span className="calc-text">for</span>

                    <div className="calc-output-wrapper">
                        <span className="calc-output calc-text no-margin" id="numPayments">{numPayments}&nbsp;</span>
                        <span className="calc-output calc-text no-margin" id="outputTerm2">{outputTerm}</span>
                        <span className="calc-output calc-text no-margin">s</span>
                        <span className="calc-text">.*</span>
                    </div>

                    <p className="calc-annotation">
                        *Estimate based on Advance Fee of 1.5%. Your Fees will be determined upon application approval.
                    </p>

                </div>

            </div>
        )
    }

    render() {
        return (
            <div id="case-study-modal" className="case-study vssl">

                <div className="header">
                    <div className="center">
                        <h1>Custom Interactivity</h1>
                        <img src="./assets/img/work/vssl/logo-vssl-header.svg" />
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
                                    <img className="device-screen phone vssl" src="./assets/img/work/vssl/vssl-mobile-1.jpg" />
                                    <img className="device-screen tablet" src="./assets/img/work/vssl/vssl-tablet-1.jpg" />
                                    <img className="device-screen desktop" src="./assets/img/work/vssl/vssl-mobile-2b.jpg" />
                                </div>
                            </div>
                        </div>

                        <div className="widgets cs-block">

                            <div className="widget slider">
                                <strong>Interest Rate Slider</strong>
                                <div className="widget-inner">
                                    {this.renderSlider()}
                                    <span className="percentage">{`${this.state.percent}%`}</span>
                                </div>
                            </div>

                            <div className="widget calc">
                                <strong>Loan Payment Calculator</strong>
                                <div className="widget-inner">
                                    {this.renderCalc()}
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