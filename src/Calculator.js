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
        {displayValue}
      </div>
    );
  }
}

export default Calculator;
