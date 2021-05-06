import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption name={'NAME'} type={'TYPE'} />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption name={'NAME'} />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const expectedName = 'Lorem ipsum';
    const component = shallow(<OrderOption name={expectedName} />);
  
    expect(component.text()).toEqual(expectedName);
  });
});
