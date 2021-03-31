import React from 'react';
import {shallow} from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    const component = shallow(<Hero titleText='Lorem ipsum'/>);
    expect(component).toBeTruthy();
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });
  it('should render correct title and image', () => {
    const expectedTitle = 'Lorem ipsum';
    const expectImage = 'image.jpg';
    const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectImage} />);

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
    expect(component.find('.image').prop('src')).toEqual(expectImage);
    console.log(component.debug());
  });
});