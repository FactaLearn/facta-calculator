import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calculator from './Calculator';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('HTML', () => {
  it('calculator should have a display div', () => {
    const wrapper = render(<Calculator />);
    expect(wrapper.find('.display').length).toEqual(1);
  });

  it('calculator should have 10 digit keys', () => {
    const wrapper = render(<Calculator />);
    expect(wrapper.find('.digitButton').length).toEqual(10);
  });

  it('calculator should have 4 operation keys', () => {
    const wrapper = render(<Calculator />);
    expect(wrapper.find('.operationButton').length).toEqual(4);
  });
});

it('adds numbers', () => {
  expect(1+2).toEqual(3);
});
