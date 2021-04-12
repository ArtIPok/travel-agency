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
      id: 'abc',
      image: '/abc/d.jpg',
      name: 'test image',
    };

    const component = shallow(<TripSummary {...props} />);
    expect(component.find('img').prop('src')).toEqual(props.image);
    expect(component.find('img').prop('alt')).toEqual(props.name);

  });

  it('should render correctly props: name, cost and days', () => {
    const props = {
      id: 'abc',
      name: 'Test Trip',
      days: 2,
      cost: '123$',
    };

    const component = shallow(<TripSummary {...props} />);
    expect(component.find('.title').text()).toEqual(props.name);
    expect(component.find('.details').find('span').at(0).text()).toEqual('2 days');
    expect(component.find('.details').find('span').at(1).text()).toEqual('from 123$');
  });

  it('lack of any props with crashing', () => {

    // const component = shallow(<TripSummary />);
    // expect(component).toThrow();
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render in correct order in span for 3 tags', () => {
    const tags = ['tag1', 'tag2', 'tag3'];

    const component = shallow(<TripSummary tags={tags} />);
    expect(component.find('.tags').find('span').at(0).text()).toEqual('tag1');
    expect(component.find('.tags').find('span').at(1).text()).toEqual('tag2');
    expect(component.find('.tags').find('span').at(2).text()).toEqual('tag3');
  });

  it('should render div with class tags only when tags is not false or empty', () => {

    const component = shallow(<TripSummary tags={[]} />);
    expect(component).toBeTruthy();
  });
});