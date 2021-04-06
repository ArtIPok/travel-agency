import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generated correctly address', () => {
    const expectedAdress = 'abc';
    const component = shallow(<TripSummary id={expectedAdress} />);
    expect(component.find('/trip/').prop('to')).toEqual(expectedAdress);
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