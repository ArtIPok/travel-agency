import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generated correctly address', () => {
    const id = 'abc';
    const expectedAdress = '/trip/abc';
    const component = shallow(<TripSummary id={id} />);
    expect(component.find('Link').prop('to')).toEqual(expectedAdress);
  });

  it('should have img with correct src and alt', () => {
    const props = {
      image: '/abc/d.jpg',
      name: 'test image',
    };

    const component = shallow(<TripSummary {...props} />);
    expect(component.find('img').prop('src')).toEqual(props.image);
    expect(component.find('img').prop('alt')).toEqual(props.name);

  });

  it('should render correctly props: name, cost and days', () => {
    const props = {
      name: 'Test Trip',
      days: 2,
      cost: '123$',
    };

    const component = shallow(<TripSummary {...props} />);
    expect(component.find('.title').text()).toEqual(props.name);
    expect(component.find('.details').find('span').at(0).text()).toEqual('2 days');
    expect(component.find('.details').find('span').at(1).text()).toEqual('from 123$');
  });
/*
  it('lack any props with crashing', () => {
    const expectedSrc = props.src;

    const component = mount(<TripSummary />);
    expect(component.find).prop('to').toEqual(expectedAdress);
  }); */
});