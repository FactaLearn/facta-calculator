import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: 0,
    };
  }

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="display">
          {displayValue}
        </div>
        <div className="functions">
          <div className="function">AC</div>
          <div className="function">±</div>
          <div className="function">%</div>
        </div>
        <div className="operators">
          <div className="operator">/</div>
          <div className="operator">x</div>
          <div className="operator">-</div>
          <div className="operator">+</div>
          <div className="operator lower-right-corner">=</div>
        </div>
        <div className="numbers">
          <div className="number">7</div>
          <div className="number">8</div>
          <div className="number">9</div>
          <div className="number">4</div>
          <div className="number inner">5</div>
          <div className="number">6</div>
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
          <div className="number double lower-left-corner">0</div>
          <div className="number">,</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
