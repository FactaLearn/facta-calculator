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
        <div className="digitButton">0</div>
        <div className="digitButton">1</div>
        <div className="digitButton">2</div>
        <div className="digitButton">3</div>
        <div className="digitButton">4</div>
        <div className="digitButton">5</div>
        <div className="digitButton">6</div>
        <div className="digitButton">7</div>
        <div className="digitButton">8</div>
        <div className="digitButton">9</div>
        <div className="operationButton">+</div>
        <div className="operationButton">-</div>
        <div className="operationButton">\/</div>
        <div className="operationButton">x</div>
      </div>
    );
  }
}

export default Calculator;
