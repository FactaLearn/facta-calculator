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

        <div className="firstRow">
          <div className="topButton">AC</div>
          <div className="topButton">+/-</div>
          <div className="topButton">%</div>
        </div>

        <div className="secondRow">
          <div className="digitButton">7</div>
          <div className="digitButton">8</div>
          <div className="digitButton">9</div>
          <div className="operationButton">/</div>
        </div>

        <div className="thirdRow">
          <div className="digitButton">4</div>
          <div className="digitButton">5</div>
          <div className="digitButton">6</div>
        </div>

        <div className="rightRow">
          <div className="operationButton">/</div>
          <div className="operationButton">x</div>
          <div className="operationButton">-</div>
          <div className="operationButton">+</div>
          <div className="operationButton">=</div>
        </div>

        <div className="fourthRow">
          <div className="digitButton">1</div>
          <div className="digitButton">2</div>
          <div className="digitButton">3</div>
        </div>

        <div className="lastRow">
          <div className="doubleButton">0</div>
          <div className="digitButton">,</div>
        </div>

      </div>
    );
  }
}

export default Calculator;
