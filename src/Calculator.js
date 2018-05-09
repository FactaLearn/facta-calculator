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

        <div className="container">
          <div className="firstColumn">AC</div>
          <div className="secondColumn">+/-</div>
          <div className="thirdColumn">%</div>
          <div className="fourthColumn">➗</div>



          <div className="firstColumn">7</div>
          <div className="secondColumn">8</div>
          <div className="thirdColumn">9</div>
          <div className="fourthColumn">x</div>


          <div className="firstColumn">4</div>
          <div className="secondColumn">5</div>
          <div className="thirdColumn">6</div>
          <div className="fourthColumn">-</div>

          <div className="firstColumn">1</div>
          <div className="secondColumn">2</div>
          <div className="thirdColumn">3</div>
          <div className="fourthColumn">+</div>

          <div className="doubleButton">0</div>
          <div className="thirdColumn">,</div>
          <div className="fourthColumn">=</div>
        </div>


      </div>
    );
  }
}

export default Calculator;
