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
      <div className="container">
        <div className="header" style={{textAlign: "right"}}>0</div>
        <div className="ordinary_top">AC</div>
        <div className="ordinary_top">+ -</div>
        <div className="ordinary_top">%</div>
        <div className="ordinary_right">/</div>
        <div className="ordinary">7</div>
        <div className="ordinary">8</div>
        <div className="ordinary">9</div>
        <div className="ordinary_right">X</div>
        <div className="ordinary">4</div>
        <div className="ordinary">5</div>
        <div className="ordinary">6</div>
        <div className="ordinary_right">-</div>
        <div className="ordinary">1</div>
        <div className="ordinary">2</div>
        <div className="ordinary">3</div>
        <div className="ordinary_right">+</div>
        <div className="footer">0</div>
        <div className="ordinary">,</div>
        <div className="ordinary_right">=</div>
      </div>
    );
  }
}

export default Calculator;
