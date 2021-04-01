import React from 'react';
import {mount} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generated correctly address', () => {
    const expectedAdress = 'abc';
    const component = mount(<TripSummary id={expectedAdress} />);
    expect(component.find).prop('to').toEqual(expectedAdress);
  });
/* it('should has correctly src and alt', () => {
    const expectedSrc = props.src;

    const component = mount(<TripSummary />);
    expect(component.find).prop('to').toEqual(expectedAdress);
  });

  it('should render correctly props: name, cost and days', () => {
    const expectedSrc = props.src;

    const component = mount(<TripSummary />);
    expect(component.find).prop('to').toEqual(expectedAdress);
  });

  it('lack any props with crashing', () => {
    const expectedSrc = props.src;

    const component = mount(<TripSummary />);
    expect(component.find).prop('to').toEqual(expectedAdress);
  }); */
});