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
      <div>
      <table>
            <tr>
              <th colspan="4" className="calculator" style ={{textAlign: "right"}}> {displayValue}</th>
            </tr>
            <tr>
                <td className="top">AC</td>
                <td className="top">+ -</td>
                <td className="top">%</td>
                <td className="right">/</td>
            </tr>
            <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
                <td className="right">X</td>
            </tr>
            <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td className="right">-</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td className="right">+</td>
            </tr>
            <tr>
                <td colspan="2" className="left">0</td>
                <td>,</td>
                <td className="right">=</td>
            </tr>
        </table>
       
      </div>
    );
  }
}

export default Calculator;
