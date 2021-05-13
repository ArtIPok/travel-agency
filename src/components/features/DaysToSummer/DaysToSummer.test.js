import React from 'react';
import { shallow } from 'enzyme';

import DaysToSummer from './DaysToSummer';

const mockProps = {
  summmerDescription: 'days to summer!',
};

describe('Coponent DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should rendered description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists('.summerDescription')).toEqual(true);
  });

  it('should rendered prop', () => {
    const component = shallow(<DaysToSummer {...mockProps}/>);
    const renderSummerDescription = component.find('.summerDescription').text();

    expect(renderSummerDescription).toEqual('38 '+ mockProps.summmerDescription);
  });
});

const trueDate = Date;
const summerDate = '${date}.135Z';

const mockDate = (summerDate) => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(summerDate);
    }
    return this;
  }
  static now(){
    return (new Date(summerDate)).getTime();
  }
};

const checkDescriptionAtDate = (expectedDescription) => {
  it('should show correct at ${date}', () => {
    global.Date = mockDate(summerDate);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedDate = component.find('.summerDescription').text();
    expect(renderedDate).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

xdescribe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtDate(new Date(), mockProps.summmerDescription);
  checkDescriptionAtDate('2021-06-21T00:00:00', '');
  checkDescriptionAtDate('2021-09-24T00:00:01', mockProps.summmerDescription);
});
